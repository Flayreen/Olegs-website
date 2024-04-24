import pkg from 'gulp';
const { task, parallel, watch, series, lastRun, src, dest } = pkg;

// Пакети для стилів
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-clean-css';
import flexFix from 'postcss-flexbugs-fixes';

// Пакети для HTML
import fileInclude from 'gulp-file-include';
import prettyHtml from 'gulp-pretty-html';
import htmlmin from 'gulp-htmlmin';

// Пакети для JS
import concat from 'gulp-concat';
import terser from 'gulp-terser';

// Інші пакети
import { deleteAsync } from 'del';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

task('styleCSS', function () {
	return src('./src/styles/*.scss')
		.pipe(sass.sync({
			sourceComments: false,
			outputStyle: "expanded"
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			grid: true,
			cascade: true     // чомусь не працює
		}))
		.pipe(minifyCSS({ compatibility: 'ie8' }))
		.pipe(dest('./dist/css/'))
		.pipe(browserSync.stream())
});

task('moveJS', function () {
	return src('src/scripts/**/*.js')
		.pipe(concat('scripts.min.js'))
		.pipe(terser())
		.pipe(dest('dist/js'))
		.pipe(browserSync.stream())
})

task('moveHTML', function () {
	return src('./src/markup/*.html')
		.pipe(fileInclude())
		.pipe(prettyHtml({
			indent_size: 4,
			indent_char: ' ',
			unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
		}))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('./dist'))
		.pipe(browserSync.stream())
})

task('moveIMG', function () {
	return src('./src/assets/**/*')
		.pipe(dest('./dist/assets'))
		.pipe(browserSync.stream())
})

task('minIMG', function () {
	return src('./dist/assets/**/*')
		.pipe(imagemin())
		.pipe(dest('./dist/assets/'))
})

task('cleanDist', function () {
	return deleteAsync(["./dist"]);
})

task('watcher', function () {
	watch('./src/styles/**/*.scss', parallel('styleCSS')).on('change', browserSync.reload);
	watch('./src/scripts/**/*.js', parallel('moveJS')).on('change', browserSync.reload);
	watch('./src/markup/*.html', parallel('moveHTML')).on('change', browserSync.reload);
	watch('./src/markup/**/*.html', parallel('moveHTML')).on('change', browserSync.reload);
	watch('./src/assets/**/*', parallel('moveIMG')).on('change', browserSync.reload);
})

task('server',  function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
})


task('dev', series('cleanDist','styleCSS', 'moveJS', 'moveHTML', 'moveIMG'));

task('build', series('cleanDist', 'moveHTML', 'styleCSS', 'moveJS', 'moveIMG', 'minIMG'));

task('default', parallel('dev', 'watcher', "server"));
