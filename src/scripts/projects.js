const projects = [
    {
        title: "Final project vtormall",
        photo: "assets/images/projects/first-project.jpg",
        description: "I was the Scrum Master in a team of 9 people, which created a fully functioning buying and selling platform. I was responsible for both the frontend and backend aspects of the project take on any task with great enthusiasm, especially if it involves React.",
        technologies: ["GIT", "GIT", "GIT", "GIT","GIT","GIT","GIT","GIT","Canvas", "CSS", "Ant Design", "HTML"],
        projectURL: "https://www.google.com.ua",
    },
    {
        title: "Step project cards",
        photo: "assets/images/projects/second-project.jpg",
        description: "A web application created by three people, where you can sign up and create cards for doctor meetings. You can also edit or delete them.",
        technologies: ["Python", "GIT", "GIT","GIT","GIT","GIT","GIT", "GIT","Canvas", "Java", "GIT", "Ant Design"],
        projectURL: "https://www.google.com.ua",
    },
    {
        title: "Snak",
        photo: "assets/images/projects/third-project.jpg",
        description: "Game snack made for the fun. The main controller is long, enveloping the creature, forming a snake that crawls along a plane (usually bounded by walls), collecting food (or other items), avoiding manifestation with its own tail and the edges of the playing field.",
        technologies: ["GIT", "Canvas", "CSS", "Ant Design", "HTML"],
        projectURL: "https://www.google.com.ua",
    },
];

function appendProjects() {
    const container = document.querySelector(".portfolio__projects-container");

    projects.forEach(({title, photo, description, technologies, projectURL}, index) => {
        let technologiesText = "";
        technologies.forEach(elem => technologiesText += `<span class="portfolio__projects-container__item__content__actions__technologies__technology">${elem}</span>`)
        container.insertAdjacentHTML(
            "beforeend",
            `
                 <div class="portfolio__projects-container__item portfolio__projects-container__number${index+1}">
                    <div class="portfolio__projects-container__item__photo">
                        <img src=${photo} alt="project photo">
                    </div>
                    <div class="portfolio__projects-container__item__content">
                        <div class="portfolio__projects-container__item__content__text">
                            <span class="portfolio__projects-container__item__content__text__title">${title}</span>
                            <p class="portfolio__projects-container__item__content__text__description">${description}</p>
                        </div>
                        
                        <div class="portfolio__projects-container__item__content__actions">
                            <div class="portfolio__projects-container__item__content__actions__technologies">
                                ${technologiesText}
                            </div>
                            <a target="_blank" href=${projectURL}>
                                <button class="portfolio__projects-container__item__content__actions__buttton">
                                    View more
                                    <svg class="portfolio__projects-container__item__content__actions__buttton__icon-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 5L19 12L12 19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg class="portfolio__projects-container__item__content__actions__buttton__icon-top" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 19L12.5 5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.5 12L12.5 5L19.5 12" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            `
        )
    })
}

appendProjects();
