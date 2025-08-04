// Liste des compétences (Skill list)
const skills = [
  { name: "Python", icon: "fab fa-python" }, // Langage de programmation Python
  { name: "JavaScript", icon: "fab fa-js" }, // Langage de programmation JavaScript
  { name: "React", icon: "fab fa-react" }, // Bibliothèque JavaScript React
  { name: "Node.js", icon: "fab fa-node" }, // Environnement d'exécution Node.js
  { name: "Cloud Computing", icon: "fas fa-cloud" }, // Informatique en nuage
  { name: "Apprentissage automatique", icon: "fas fa-brain" }, // Apprentissage automatique
];

// Liste des projets (Project list)
const projects = [
  {
    name: "CV Builder", // 
    description:
      "Système de creation de cv professionel en quelque minutes.", 
    technologies: ["Vite", "React", "Html5", "CSS3", "JavaScript"], 
    github: "#",
    demo: "https://verdant-babka-f67389.netlify.app/",
    image:
      "images/cvbuilder.png", 
  },
  {
    name: "AM-SA", 
    description:
      "refonte de la Plateforme collaborative solidaire.", 
    technologies: ["Node.js", "NextJS", "PostgreSQL", "Daisy UI", "tailwind css"], 
    github: "#",
    demo: "https://solidarit.netlify.app/",
    image:
      "images/am-sa.png", 
  },
  {
    name: "Ecole centrale", 
    description:
      "Plateforme institutionnel d’école.", 
    technologies: ["React", "Next.js", "Daisy UI", "Tailwind css"], 
    github: "#",
    demo: "https://eduportail.netlify.app/",
    image:
      "images/ecole-central.png", 
  },
  {
    name: "ScreenCraft", 
    description:
      "Enregistrement d'Écran Professionnel et Édition Vidéo.", 
    technologies: ["React", "Vite", "TS"], 
    github: "#",
    demo: "https://wscreenrecorder.netlify.app/",
    image:
      "images/screencraft.png", 
  },
  {
    name: "AKAMAGROUPE", 
    description:
      "Site Entreprise refonte du site akama groupe SARL.", 
    technologies: ["NextJS", "Daisy UI", "TAilwin css"], 
    github: "#",
    demo: "https://akamaweb.netlify.app/",
    image:
      "images/akama.png", 
  },
  {
    name: "sadaci", 
    description:
      "Solutions professionnelles complètes pour votre entreprise en Côte d'Ivoire.", 
    technologies: ["NextJs", "Daisy UI", "Tailwind css"], 
    github: "#",
    demo: "#",
    image:
      "images/sadaci.png", 
  },
   {
    name: "drive-ivoire", 
    description:
      "app mobile vente de vehicule en cours de developpement", 
    technologies: ["Laravel 12", "Daisy UI", "Tailwind css"], 
    github: "#",
    demo: "#",
    image:
      "images/drive-ivoire.png", 
  },
  {
    name: "yume", 
    description:
      "app mobile de streaming manga en cours de developpement", 
    technologies: ["flutter", "Dart", "Python", "Flask"], 
    github: "#",
    demo: "#",
    image:
      "images/yume.png", 
  },
  {
    name: "Divi Solution", 
    description:
      "Divi Solutions Tech est une entreprise basée à Montréal, Québec, qui se dédie à aider les individus, et particulièrement les nouveaux arrivants francophones et les résidents du Québec, à maîtriser les outils et technologies numériques.", // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
    technologies: ["Wordpress", "Elementor"], 
    github: "#",
    demo: "https://www.divisolutionstech.ca",
    image:
      "images/diviSolution.png", 
  },
];

// Configuration de l'animation de texte (Text animation configuration)
document.addEventListener("DOMContentLoaded", function () {
  // Animation du texte sur la page d'accueil (Text animation on homepage)
  const typedElement = document.getElementById("typed-output");
  if (typedElement) {
    new Typed("#typed-output", {
      strings: [
        "Développeur Frontend", // Développeur Frontend
        "Laravel", // Ingénieur en Apprentissage Automatique
        "Wordpress", // Architecte Cloud
        "Python",
        "postgresql",
        "MySQL...", // Passionné de Tech
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
  }

  // Création des cartes de compétences (Skill card creation)
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skills.forEach((skill) => {
      const skillCol = document.createElement("div");
      skillCol.className = "col-6 col-md-4 col-lg-3 mb-4";

      const skillCard = document.createElement("div");
      skillCard.className = "skill-card p-3 text-center";

      skillCard.innerHTML = `
                <i class="${skill.icon} fa-2x mb-2"></i>
                <h5 class="skill-name">${skill.name}</h5>
            `;

      skillCol.appendChild(skillCard);
      skillsContainer.appendChild(skillCol);
    });
  }

  // Création des cartes de projet (Project card creation)
  function createProjectCard(project) {
    // Génération conditionnelle des boutons
    let demoBtn = '';
    let githubBtn = '';
    if (project.demo && project.demo !== '#') {
      demoBtn = `<a href="${project.demo}" class="btn btn-primary btn-sm mx-2" target="_blank" rel="noopener">Demo en direct</a>`;
    }
    if (project.github && project.github !== '#') {
      githubBtn = `<a href="${project.github}" class="btn btn-outline-secondary btn-sm mx-2" target="_blank" rel="noopener"Code source</a>`;
    }
    return `
            <div class="project-card card h-100">
                <img src="${
                  project.image
                }" class="card-img-top" alt="${project.name}">
                <div class="card-body">
                    <div class="project-tags mb-2">
                        ${project.technologies
                          .map(
                            (tech) =>
                              `<span class="badge bg-primary">${tech}</span>`
                          )
                          .join(" ")}
                    </div>
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <div class="d-flex justify-content-center">
                        ${demoBtn}
                        ${githubBtn}
                    </div>
                </div>
            </div>
        `;
  }

  // Affichage des projets (Display projects)
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    projects.forEach((project, index) => {
      if (index % 3 === 0) {
        const row = document.createElement("div");
        row.className = "row g-4 mb-4";
        projectsContainer.appendChild(row);
      }

      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = createProjectCard(project);

      const lastRow = projectsContainer.lastElementChild;
      lastRow.appendChild(col);
    });
  }

  // Animation de code dans la section #home
  const homeSection = document.getElementById("home");
  if (homeSection) {
    const codeAnim = document.createElement("pre");
    codeAnim.className = "code-animation position-absolute text-start text-success";
    codeAnim.style.top = "10%";
    codeAnim.style.left = "5%";
    codeAnim.style.opacity = "0.7";
    codeAnim.style.pointerEvents = "none";
    codeAnim.style.background = "none";
    codeAnim.style.fontSize = "1rem";
    codeAnim.style.zIndex = "2";
    codeAnim.style.maxWidth = "350px";
    codeAnim.style.whiteSpace = "pre-line";
    homeSection.appendChild(codeAnim);

    const codeLines = [
      'function helloWorld() {',
      '  console.log("Bienvenu !");',
      '}',
      '',
      'const skills = ["Dev", "Frontend", "Backend", "Fullstack"];',
      'let projet = "Innovation";',
      'if (rodriguewanonkou@outlook.fr) {',
      '  develop(+225 01 03 22 74 85);',
      '}',
    ];
    let line = 0;
    let char = 0;
    let displayed = "";
    function typeCode() {
      if (line < codeLines.length) {
        if (char < codeLines[line].length) {
          displayed += codeLines[line][char];
          char++;
          codeAnim.textContent = displayed + "|";
        } else {
          displayed += "\n";
          char = 0;
          line++;
        }
        setTimeout(typeCode, 40);
      } else {
        codeAnim.textContent = displayed;
      }
    }
    typeCode();
  }
});
