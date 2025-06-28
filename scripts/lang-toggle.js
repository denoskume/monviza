// scripts/lang-toggle.js

function changeLanguage(lang) {
  // Set the lang attribute on the <html> tag
  document.documentElement.setAttribute('lang', lang);

  // Show only matching language content
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = (el.getAttribute('lang') === lang) ? 'block' : 'none';
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'fr';
  changeLanguage(savedLang);
});
