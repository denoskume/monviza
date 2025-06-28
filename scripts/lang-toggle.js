// scripts/lang-toggle.js
function changeLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferredLang', lang);
}

// On first load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'fr';
  changeLanguage(savedLang);
});
