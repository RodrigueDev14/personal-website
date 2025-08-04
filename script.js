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
      "Système de creation de cv professionel en quelque minutes.", // Système de gestion de tâches intelligent avec prédiction de priorité basée sur l'apprentissage automatique et traitement du langage naturel
    technologies: ["Vite", "React", "Html5", "CSS3", "JavaScript"], // Technologies utilisées : Vite, React, Html5, CSS3, JavaScript
    github: "#",
    demo: "https://verdant-babka-f67389.netlify.app/",
    image:
      "images/cvbuilder.png", // Correction du chemin de l'image du projet
  },
  {
    name: "AM-SA", 
    description:
      "refonte de la Plateforme collaborative solidaire.", // Solution e-commerce complète avec gestion des stocks en temps réel et analyse
    technologies: ["Node.js", "NextJS", "PostgreSQL", "Daisy UI", "tailwind css"], // Technologies utilisées : Node.js, React, Express, PostgreSQL, Redis
    github: "#",
    demo: "https://solidarit.netlify.app/",
    image:
      "images/am-sa.png", // Chemin de l'image du projet AM-SA
  },
  {
    name: "Ecole centrale", // Système de stockage en nuage
    description:
      "Plateforme institutionnel d’école.", // Stockage en nuage sécurisé avec chiffrement de bout en bout et fonctionnalités de collaboration en temps réel
    technologies: ["React", "Next.js", "Daisy UI", "Tailwind css"], // Technologies utilisées : Python, AWS S3, Django, React, Docker
    github: "#",
    demo: "https://eduportail.netlify.app/",
    image:
      "images/ecole-central.png", // Chemin de l'image du projet Système de stockage en nuage
  },
  {
    name: "ScreenCraft", // Tableau de bord analytique
    description:
      "Enregistrement d'Écran Professionnel et Édition Vidéo.", // Tableau de bord interactif pour visualiser et analyser les flux de données volumineux en temps réel
    technologies: ["React", "Vite", "TS"], // Technologies utilisées : JavaScript, D3.js, Node.js, WebSocket, MongoDB
    github: "#",
    demo: "https://wscreenrecorder.netlify.app/",
    image:
      "images/screencraft.png", // Chemin de l'image du projet ScreenCraft
  },
  {
    name: "AKAMAGROUPE", // Application de reconnaissance d\'images
    description:
      "Site Entreprise refonte du site akama groupe SARL.", // Modèle d\'apprentissage profond pour la classification et la détection d\'objets en temps réel
    technologies: ["NextJS", "Daisy UI", "TAilwin css"], // Technologies utilisées : Python, TensorFlow, OpenCV, Flask, React
    github: "#",
    demo: "https://akamaweb.netlify.app/",
    image:
      "images/akama.png", // Chemin de l'image du projet AKAMAGROUPE
  },
  {
    name: "sadaci", // Analyseur de médias sociaux
    description:
      "Solutions professionnelles complètes pour votre entreprise en Côte d'Ivoire.", // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
    technologies: ["NextJs", "Daisy UI", "Tailwind css"], // Technologies utilisées : Python, NLTK, FastAPI, React, PostgreSQL
    github: "#",
    demo: "#",
    image:
      "images/sadaci.png", // Chemin de l'image du projet sadaci
  },
   {
    name: "drive-ivoire", // Analyseur de médias sociaux
    description:
      "app mobile vente de vehicule en cours de developpement", // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
    technologies: ["Laravel 12", "Daisy UI", "Tailwind css"], // Technologies utilisées : Python, NLTK, FastAPI, React, PostgreSQL
    github: "#",
    demo: "#",
    image:
      "images/drive-ivoire.png", // Chemin de l'image du projet sadaci
  },
  {
    name: "yume", // Analyseur de médias sociaux
    description:
      "app mobile de streaming manga en cours de developpement", // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
    technologies: ["flutter", "Dart", "Python", "Flask"], // Technologies utilisées : Python, NLTK, FastAPI, React, PostgreSQL
    github: "#",
    demo: "#",
    image:
      "images/yume.png", // Chemin de l'image du projet sadaci
  },
  {
    name: "Divi Solution", // Analyseur de médias sociaux
    description:
      "Divi Solutions Tech est une entreprise basée à Montréal, Québec, qui se dédie à aider les individus, et particulièrement les nouveaux arrivants francophones et les résidents du Québec, à maîtriser les outils et technologies numériques.", // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
    technologies: ["Wordpress", "Elementor"], // Technologies utilisées : Python, NLTK, FastAPI, React, PostgreSQL
    github: "#",
    demo: "https://www.divisolutionstech.ca",
    image:
      "images/diviSolution.png", // Chemin de l'image du projet sadaci
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
    return `
      <div class="project-card card h-100">
        <img src="${project.image}" class="card-img-top" alt="${project.name}">
        <div class="card-body">
          <div class="project-tags mb-2">
            ${project.technologies
              .map((tech) => `<span class="badge bg-primary">${tech}</span>`)
              .join(" ")}
          </div>
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.description}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
          <div class="d-flex justify-content-center">
            ${
              project.demo && project.demo !== "#"
                ? `<a href="${project.demo}" class="btn btn-primary btn-sm mx-2" target="_blank">Accéder</a>`
                : ""
            }
            ${
              project.github && project.github !== "#"
                ? `<a href="${project.github}" class="btn btn-outline-secondary btn-sm mx-2" target="_blank">Code</a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  // Affichage dynamique des projets sur toutes les pages qui contiennent #projects-container
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    // Nettoyer le container au cas où
    projectsContainer.innerHTML = "";
    let row = null;
    projects.forEach((project, index) => {
      if (index % 3 === 0) {
        row = document.createElement("div");
        row.className = "row g-4 mb-4";
        projectsContainer.appendChild(row);
      }
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = createProjectCard(project);
      row.appendChild(col);
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
