/* Remitpro Docs — Extra JS */

/* Keyboard shortcut hint on search */
document.addEventListener('DOMContentLoaded', () => {
  // Add version label to the header title if not already present
  const headerTitle = document.querySelector('.md-header__topic:first-child .md-ellipsis');
  if (headerTitle && !headerTitle.querySelector('.version-chip')) {
    const chip = document.createElement('span');
    chip.className = 'version-chip';
    chip.textContent = 'v2.5';
    headerTitle.appendChild(chip);
  }
});
