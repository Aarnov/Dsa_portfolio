document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Hide all sections
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active');
        });

        // Show the clicked section
        document.querySelector(targetId).classList.add('active');
    });
});
