/* =====================================
   PORTFOLIO DATA
===================================== */

const portfolioData = {
    name: "Your Name",

    roles: [
        "Web Developer",
        "JavaScript Developer",
        "Problem Solver",
        "Creative Designer",
        "Software Developer "
    ],

    stats: {
        projects: 12,
        skills: 8,
        experience: 3
    },

    projects: [
        {
            title: "Portfolio Website",
            description:
                "A responsive personal portfolio website built with HTML, CSS and JavaScript.",
            category: "web"
        },

        {
            title: "Task Manager",
            description:
                "An interactive task management application with dynamic features.",
            category: "javascript"
        },

        {
            title: "Business Website",
            description:
                "A modern responsive website created for a business.",
            category: "web"
        },

        {
            title: "Weather Application",
            description:
                "A JavaScript application that displays weather information.",
            category: "javascript"
        },

        {
            title: "Landing Page",
            description:
                "A clean and modern responsive landing page.",
            category: "web"
        },

        {
            title: "Quiz Application",
            description:
                "An interactive quiz built using JavaScript.",
            category: "javascript"
        },

        {
            title: "web-page over view",
            description:
                "Over seeing the website and ensuring the functionality of everything.",
            category: "WIL.projects"
        }
    ]
};


/* =====================================
   TYPING EFFECT
===================================== */

const typingElement =
    document.getElementById("typingText");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        portfolioData.roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex ===
                portfolioData.roles.length
            ) {

                roleIndex = 0;
            }
        }
    }


    const typingSpeed =
        deleting ? 60 : 120;

    setTimeout(
        typeEffect,
        typingSpeed
    );
}


typeEffect();


/* =====================================
   PROJECT RENDERING
===================================== */

const projectsContainer =
    document.getElementById(
        "projectsContainer"
    );


function renderProjects(
    category = "all"
) {

    projectsContainer.innerHTML = "";


    const filteredProjects =
        category === "all"
            ? portfolioData.projects
            : portfolioData.projects.filter(
                project =>
                    project.category === category
            );


    filteredProjects.forEach(
        (project, index) => {

            const projectCard =
                document.createElement("div");

            projectCard.classList.add(
                "project-card"
            );


            projectCard.innerHTML = `
                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <button
                    class="project-button"
                    data-project="${index}"
                >
                    View Project
                </button>
            `;


            projectsContainer.appendChild(
                projectCard
            );
        }
    );


    addProjectButtonEvents();
}


/* =====================================
   PROJECT BUTTON EVENTS
===================================== */

function addProjectButtonEvents() {

    const buttons =
        document.querySelectorAll(
            ".project-button"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const projectIndex =
                        this.dataset.project;


                    const project =
                        portfolioData.projects[
                            projectIndex
                        ];


                    showProjectMessage(
                        project
                    );
                }
            );

        }
    );
}


/* =====================================
   PROJECT MESSAGE
===================================== */

function showProjectMessage(
    project
) {

    alert(
        `Project: ${project.title}

Category: ${project.category}

Description:
${project.description}

https://github.com/usingaopang-prog/Zonke-website-survey`
    );
}


/* =====================================
   PROJECT FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    button =>
                        button.classList.remove(
                            "active"
                        )
                );


                this.classList.add(
                    "active"
                );


                const category =
                    this.dataset.filter;


                renderProjects(
                    category
                );
            }
        );

    }
);


/* =====================================
   ANIMATED COUNTERS
===================================== */

function animateCounter(
    element,
    target
) {

    let current = 0;

    const increment =
        Math.ceil(target / 50);


    const interval =
        setInterval(
            () => {

                current += increment;


                if (
                    current >= target
                ) {

                    current = target;

                    clearInterval(
                        interval
                    );
                }


                element.textContent =
                    current;

            },
            30
        );
}


function startCounters() {

    const projectCounter =
        document.getElementById(
            "projectCounter"
        );

    const skillCounter =
        document.getElementById(
            "skillCounter"
        );

    const experienceCounter =
        document.getElementById(
            "experienceCounter"
        );


    animateCounter(
        projectCounter,
        portfolioData.stats.projects
    );


    animateCounter(
        skillCounter,
        portfolioData.stats.skills
    );


    animateCounter(
        experienceCounter,
        portfolioData.stats.experience
    );
}


/* =====================================
   INTERSECTION OBSERVER
===================================== */

let countersStarted = false;


const aboutSection =
    document.getElementById(
        "about"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting &&
                        !countersStarted
                    ) {

                        startCounters();

                        countersStarted = true;
                    }
                }
            );

        },
        {
            threshold: 0.4
        }
    );


sectionObserver.observe(
    aboutSection
);


/* =====================================
   SKILL ANIMATION
===================================== */

const skillsSection =
    document.getElementById(
        "skills"
    );


function animateSkills() {

    const progressBars =
        document.querySelectorAll(
            ".progress"
        );


    progressBars.forEach(
        progress => {

            if (
                progress.classList.contains(
                    "html-progress"
                )
            ) {

                progress.style.width =
                    "90%";
            }


            if (
                progress.classList.contains(
                    "css-progress"
                )
            ) {

                progress.style.width =
                    "85%";
            }


            if (
                progress.classList.contains(
                    "javascript-progress"
                )
            ) {

                progress.style.width =
                    "80%";
            }


            if (
                progress.classList.contains(
                    "problem-progress"
                )
            ) {

                progress.style.width =
                    "85%";
            }

        }
    );
}


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateSkills();
                    }
                }
            );

        },
        {
            threshold: 0.3
        }
    );


skillObserver.observe(
    skillsSection
);


/* =====================================
   HARSKELL
===================================== */
async function loadProjects() {
    try {
        const response = await fetch("http://localhost:3000/api/projects");
        const projects = await response.json();

        const container = document.getElementById("projectsContainer");

        container.innerHTML = "";

        projects.forEach(project => {
            const projectCard = document.createElement("div");

            projectCard.classList.add("project-card");
            projectCard.dataset.category = project.category;

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span>${project.category}</span>
            `;

            container.appendChild(projectCard);
        });

    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

loadProjects();
/* =====================================
   VIEW PROJECTS BUTTON
===================================== */

const viewProjectsButton =
    document.getElementById(
        "viewProjectsButton"
    );


viewProjectsButton.addEventListener(
    "click",
    () => {

        document
            .getElementById(
                "projects"
            )
            .scrollIntoView(
                {
                    behavior: "smooth"
                }
            );

    }
);


/* =====================================
   DOWNLOAD CV BUTTON
===================================== */

const downloadButton =
    document.getElementById(
        "downloadButton"
    );


downloadButton.addEventListener(
    "click",
    () => {

        alert(
            "Add your CV PDF to the project folder and connect it here."
        );

    }
);


/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "show"
        );

    }
);


/* =====================================
   CLOSE MOBILE MENU
===================================== */

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "show"
                    );

                }
            );

        }
    );


/* =====================================
   BACK TO TOP BUTTON
===================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.style.display =
                "block";

        } else {

            backToTop.style.display =
                "none";
        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );

    }
);


/* =====================================
   CURRENT YEAR
===================================== */

document
    .getElementById(
        "currentYear"
    )
    .textContent =
        new Date().getFullYear();


/* =====================================
   INITIAL PROJECT RENDER
===================================== */

renderProjects();