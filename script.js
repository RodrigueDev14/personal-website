// Liste des compétences (Skill list)
const skills = [
    { name: 'Python', icon: 'fab fa-python' }, // Langage de programmation Python
    { name: 'JavaScript', icon: 'fab fa-js' }, // Langage de programmation JavaScript
    { name: 'React', icon: 'fab fa-react' }, // Bibliothèque JavaScript React
    { name: 'Node.js', icon: 'fab fa-node' }, // Environnement d'exécution Node.js
    { name: 'Cloud Computing', icon: 'fas fa-cloud' }, // Informatique en nuage
    { name: 'Apprentissage automatique', icon: 'fas fa-brain' }, // Apprentissage automatique
];

// Liste des projets (Project list)
const projects = [
    {
        name: 'Assistant IA', // Assistant IA pour les tâches
        description: 'Système de gestion de tâches intelligent avec prédiction de priorité basée sur l\'apprentissage automatique et traitement du langage naturel.', // Système de gestion de tâches intelligent avec prédiction de priorité basée sur l\'apprentissage automatique et traitement du langage naturel
        technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'], // Technologies utilisées : Python, TensorFlow, Flask, React, MongoDB
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1676299081847-824f1ea8c798?w=600&h=400&fit=crop'
    },
    { 
        name: 'Plateforme E-commerce', // Plateforme E-commerce
        description: 'Solution e-commerce complète avec gestion des stocks en temps réel et analyse.', // Solution e-commerce complète avec gestion des stocks en temps réel et analyse
        technologies: ['Node.js', 'React', 'Express', 'PostgreSQL', 'Redis'], // Technologies utilisées : Node.js, React, Express, PostgreSQL, Redis
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
        name: 'Système de stockage en nuage', // Système de stockage en nuage
        description: 'Stockage en nuage sécurisé avec chiffrement de bout en bout et fonctionnalités de collaboration en temps réel.', // Stockage en nuage sécurisé avec chiffrement de bout en bout et fonctionnalités de collaboration en temps réel
        technologies: ['Python', 'AWS S3', 'Django', 'React', 'Docker'], // Technologies utilisées : Python, AWS S3, Django, React, Docker
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop'
    },
    {
        name: 'Tableau de bord analytique', // Tableau de bord analytique
        description: 'Tableau de bord interactif pour visualiser et analyser les flux de données volumineux en temps réel.', // Tableau de bord interactif pour visualiser et analyser les flux de données volumineux en temps réel
        technologies: ['JavaScript', 'D3.js', 'Node.js', 'WebSocket', 'MongoDB'], // Technologies utilisées : JavaScript, D3.js, Node.js, WebSocket, MongoDB
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
        name: 'Application de reconnaissance d\'images', // Application de reconnaissance d\'images
        description: 'Modèle d\'apprentissage profond pour la classification et la détection d\'objets en temps réel.', // Modèle d\'apprentissage profond pour la classification et la détection d\'objets en temps réel
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'], // Technologies utilisées : Python, TensorFlow, OpenCV, Flask, React
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=600&h=400&fit=crop'
    },
    {
        name: 'Analyseur de médias sociaux', // Analyseur de médias sociaux
        description: 'Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments.', // Plateforme pour analyser les tendances des médias sociaux et l\'analyse des sentiments
        technologies: ['Python', 'NLTK', 'FastAPI', 'React', 'PostgreSQL'], // Technologies utilisées : Python, NLTK, FastAPI, React, PostgreSQL
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop'
    },
    {
        name: 'Système de maison intelligente', // Système de maison intelligente
        description: 'Automatisation de la maison basée sur l\'IoT avec contrôle d\'application mobile et planification.', // Automatisation de la maison basée sur l\'IoT avec contrôle d\'application mobile et planification
        technologies: ['Node.js', 'React Native', 'MQTT', 'MongoDB', 'Arduino'], // Technologies utilisées : Node.js, React Native, MQTT, MongoDB, Arduino
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=400&fit=crop'
    },
    {
        name: 'Vote sur la blockchain', // Vote sur la blockchain
        description: 'Plateforme de vote sécurisée utilisant la technologie blockchain et les contrats intelligents.', // Plateforme de vote sécurisée utilisant la technologie blockchain et les contrats intelligents
        technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'], // Technologies utilisées : Solidity, Web3.js, React, Ethereum, IPFS
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop'
    },
    {
        name: 'Visionneur de produits AR', // Visionneur de produits AR
        description: 'Application de réalité augmentée pour la visualisation de produits avec contrôle de gestes.', // Application de réalité augmentée pour la visualisation de produits avec contrôle de gestes
        technologies: ['Unity', 'C#', 'ARKit', 'React Native', 'Node.js'], // Technologies utilisées : Unity, C#, ARKit, React Native, Node.js
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop'
    },
    {
        name: 'Suivi de la forme physique', // Suivi de la forme physique
        description: 'Application mobile pour suivre les entraînements et la nutrition avec des recommandations alimentées par l\'IA.', // Application mobile pour suivre les entraînements et la nutrition avec des recommandations alimentées par l\'IA
        technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Node.js'], // Technologies utilisées : Flutter, Firebase, TensorFlow Lite, Node.js
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&h=400&fit=crop'
    },
    {
        name: 'Application météo', // Application météo
        description: 'Prévisions météo en temps réel avec des cartes interactives et des alertes.', // Prévisions météo en temps réel avec des cartes interactives et des alertes
        technologies: ['React', 'Node.js', 'OpenWeatherAPI', 'MongoDB'], // Technologies utilisées : React, Node.js, OpenWeatherAPI, MongoDB
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop'
    },
    {
        name: 'Éditeur de code', // Éditeur de code
        description: 'Éditeur de code basé sur le web avec collaboration en temps réel et contrôle de version.', // Éditeur de code basé sur le web avec collaboration en temps réel et contrôle de version
        technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'], // Technologies utilisées : Vue.js, Express, Socket.io, PostgreSQL
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
        name: 'Lecture de musique en continu', // Lecture de musique en continu
        description: 'Plateforme de lecture de musique en continu avec gestion des listes de lecture et fonctionnalités sociales.', // Plateforme de lecture de musique en continu avec gestion des listes de lecture et fonctionnalités sociales
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'], // Technologies utilisées : React, Node.js, MongoDB, AWS S3
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop'
    },
    {
        name: 'Trouveur de recettes', // Trouveur de recettes
        description: 'Système de recommandation de recettes alimenté par l\'IA basé sur les ingrédients disponibles.', // Système de recommandation de recettes alimenté par l\'IA basé sur les ingrédients disponibles
        technologies: ['Python', 'Django', 'React', 'PostgreSQL'], // Technologies utilisées : Python, Django, React, PostgreSQL
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop'
    },
    {
        name: 'Site web de portfolio', // Site web de portfolio
        description: 'Site web de portfolio personnel moderne et réactif mettant en valeur les projets et les compétences.', // Site web de portfolio personnel moderne et réactif mettant en valeur les projets et les compétences
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'], // Technologies utilisées : HTML5, CSS3, JavaScript, Bootstrap
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop'
    }
];

// Configuration de l'animation de texte (Text animation configuration)
document.addEventListener('DOMContentLoaded', function() {
    // Animation du texte sur la page d'accueil (Text animation on homepage)
    const typedElement = document.getElementById('typed-output');
    if (typedElement) {
        new Typed('#typed-output', {
            strings: [
                'Développeur Full Stack', // Développeur Full Stack
                'Ingénieur en Apprentissage Automatique', // Ingénieur en Apprentissage Automatique
                'Architecte Cloud', // Architecte Cloud
                'Passionné de Tech' // Passionné de Tech
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Création des cartes de compétences (Skill card creation)
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillCol = document.createElement('div');
            skillCol.className = 'col-6 col-md-4 col-lg-3 mb-4';
            
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card p-3 text-center';
            
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
                        ${project.technologies.map(tech => `<span class="badge bg-primary">${tech}</span>`).join(' ')}
                    </div>
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <div class="d-flex justify-content-center">
                        <a href="${project.github}" class="btn btn-outline-primary btn-sm mx-2">Voir le code</a>
                        <a href="${project.demo}" class="btn btn-primary btn-sm mx-2">Démo en direct</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Affichage des projets (Display projects)
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach((project, index) => {
            if (index % 3 === 0) {
                const row = document.createElement('div');
                row.className = 'row g-4 mb-4';
                projectsContainer.appendChild(row);
            }
            
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = createProjectCard(project);
            
            const lastRow = projectsContainer.lastElementChild;
            lastRow.appendChild(col);
        });
    }
});
