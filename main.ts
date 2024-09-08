const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

// Toggle the visibility of the Skills section
toggleSkillsButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show Skills';
  }
});