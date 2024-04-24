// const skills = {
//     "Hard": [
//         "HTML/CSS/SCSS/Canvas",
//         "GIT/Gitlub/Github",
//         "Ant Design",
//         "BEM/OOP/Gulp",
//         "Powershell",
//         "React/Redux/Router",
//         "Node.js/Fastify/Express/MongoDB/AWS-S3",
//         "UX|UI design",
//         "Interaction",
//         "Python",
//         "Java",
//         "SQL",
//         "DevOps",
//     ],
//     "Soft": [
//       "Communicable",
//       "Purposeful",
//       "Teamwork",
//       "Punctual",
//       "Willingness to learn",
//       "Polite",
//       "Smart",
//       "Agile",
//     ],
//     "Language": [
//         "English",
//         "Spanish",
//         "Ukrainian",
//         "Russian",
//     ],
// };
//
// const skillsRow = document.querySelector(".skills__content__row");
// const containerSkillsRow = document.querySelector(".skills__content");
// containerSkillsRow.innerHTML = "";
//
// for (let item in skills) {
//     // Copy from html
//     const copySkillsRow = skillsRow.cloneNode(true);
//     // Create title
//     const title = copySkillsRow.querySelector(".skills__content__row__title");
//     title.textContent = item;
//     // Create skills container
//     const skillsContainerScroll = copySkillsRow.querySelector(".skills__content__row__scroll");
//     const skillsContainer = copySkillsRow.querySelector(".skills__content__row__skills");
//     skills[item].forEach(elem => {
//         const span = document.createElement("span");
//         span.classList.add("skills__content__row__skills__item");
//         span.textContent = elem;
//         skillsContainer.append(span);
//     })
//     // All append
//     skillsContainerScroll.append(skillsContainer);
//     copySkillsRow.append(title, skillsContainerScroll)
//     containerSkillsRow.append(copySkillsRow);
// }






// const skills = {
//     "Hard": [
//         "HTML/CSS/SCSS/Canvas",
//         "GIT/Gitlub/Github",
//         "Ant Design",
//         "BEM/OOP/Gulp",
//         "Powershell",
//         "React/Redux/Router",
//         "Node.js/Fastify/Express/MongoDB/AWS-S3",
//         "UX|UI design",
//         "Interaction",
//         "Python",
//         "Java",
//         "SQL",
//         "DevOps",
//     ],
//     "Soft": [
//         "Communicable",
//         "Purposeful",
//         "Teamwork",
//         "Punctual",
//         "Willingness to learn",
//         "Polite",
//         "Smart",
//         "Agile",
//     ],
//     "Language": [
//         "English",
//         "Spanish",
//         "Ukrainian",
//         "Russian",
//     ],
// };
//
// const skillsRow = document.querySelector(".skills__content__row");
// const containerSkillsRow = document.querySelector(".skills__content");
// containerSkillsRow.innerHTML = "";
//
// for (let item in skills) {
//     // Copy from html
//     const copySkillsRow = skillsRow.cloneNode(true);
//     // Create title
//     const title = copySkillsRow.querySelector(".skills__content__row__title");
//     title.textContent = item;
//     // Create skills container
//     const skillsContainer = copySkillsRow.querySelector(".skills__content__row__skills");
//     skills[item].forEach(elem => {
//         const span = document.createElement("span");
//         span.classList.add("skills__content__row__skills__item");
//         span.textContent = elem;
//         skillsContainer.append(span);
//     })
//     // All append
//     copySkillsRow.append(title, skillsContainer)
//     containerSkillsRow.append(copySkillsRow);
// }