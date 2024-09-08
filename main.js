var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
// Toggle the visibility of the Skills section
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
