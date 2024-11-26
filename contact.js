// Options de langages de programmation pour chaque type de projet
const languageOptions = {
    web: [
        'JavaScript',
        'Python',
        'PHP',
        'Ruby',
        'Java',
        'C#',
        'TypeScript'
    ],
    mobile: [
        'Java (Android)',
        'Kotlin (Android)',
        'Swift (iOS)',
        'React Native',
        'Flutter',
        'Xamarin'
    ]
};

// Mise à jour des options de langage de programmation en fonction du type de projet sélectionné
function updateLanguages() {
    const projectType = document.getElementById('projectType').value;
    const languageSelect = document.getElementById('programmingLanguage');
    
    // Effacer les options existantes
    languageSelect.innerHTML = '';
    
    if (!projectType) {
        // Si aucun type de projet n'est sélectionné, afficher l'option par défaut
        languageSelect.innerHTML = '<option value="">Sélectionnez d\'abord le type de projet</option>';
        return;
    }
    
    // Ajouter l'option par défaut
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Sélectionnez le langage de programmation';
    languageSelect.appendChild(defaultOption);
    
    // Ajouter les options de langage en fonction du type de projet
    languageOptions[projectType].forEach(language => {
        const option = document.createElement('option');
        option.value = language.toLowerCase();
        option.textContent = language;
        languageSelect.appendChild(option);
    });
}

// Validation et soumission du formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        
        // Collecter les données du formulaire
        const formData = {
            projectType: document.getElementById('projectType').value,
            programmingLanguage: document.getElementById('programmingLanguage').value,
            firstName: document.getElementById('firstName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Ici, vous enverriez normalement les données à un serveur
        console.log('Formulaire soumis:', formData);
        
        // Afficher le message de succès
        showSuccessMessage();
        
        // Réinitialiser le formulaire
        form.reset();
        form.classList.remove('was-validated');
    });
});

// Afficher le message de succès
function showSuccessMessage() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
    successAlert.innerHTML = `
        <strong>Merci !</strong> Votre message a été envoyé avec succès.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successAlert, form.nextSibling);
    
    // Supprimer l'alerte après 5 secondes
    setTimeout(() => {
        successAlert.remove();
    }, 5000);
}
