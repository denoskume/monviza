// scripts/lang-toggle.js

function changeLanguage(lang) {
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = el.getAttribute('lang') === lang ? 'inline' : 'none';
  });

  // Optionally highlight active language in dropdown (if needed)
  localStorage.setItem('preferredLang', lang);
}

// Automatically apply user's last selected language
window.onload = () => {
  const savedLang = localStorage.getItem('preferredLang') || 'fr';
  changeLanguage(savedLang);
};
