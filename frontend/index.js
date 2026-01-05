  document.addEventListener('DOMContentLoaded', function () {
            const scrollContent = document.querySelector('.scroll-content');
            const container = document.querySelector('.scroll-container');

            // Pause animation on hover
            container.addEventListener('mouseenter', () => {
                scrollContent.style.animationPlayState = 'paused';
            });

            container.addEventListener('mouseleave', () => {
                scrollContent.style.animationPlayState = 'running';
            });
  });
           const toggleBtn = document.getElementById('toggleMode');
    const modeIcon = document.getElementById('modeIcon');

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Switch icon
        if (document.body.classList.contains('dark-mode')) {
                        modeIcon.classList.replace('fa-moon', 'fa-sun');

        } else {
                        modeIcon.classList.replace('fa-sun', 'fa-moon');

        }
    });
     document.addEventListener('DOMContentLoaded', function () {

            const readMoreButtons = document.querySelectorAll('.read-more');
            const modal = document.getElementById('projectModal');
            const modalTitle = document.getElementById('projectModalLabel');
            const modalImage = document.getElementById('modalProjectImage');
            const modalDescription = document.getElementById('modalProjectDescription');

            readMoreButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();

                    const title = this.getAttribute('data-title');
                    const img = this.getAttribute('data-img');
                    const description = this.getAttribute('data-description');

                    modalTitle.textContent = title;
                    modalImage.src = img;
                    modalImage.alt = title;
                    modalDescription.textContent = description;

                    const bootstrapModal = new bootstrap.Modal(modal);
                    bootstrapModal.show();
                });
            });
        });
    AOS.init({
    duration: 1000,  // animation duration in ms
    once: false,      // animate every time you scroll into view
    offset: 100,      // start animation 100px before element enters
  });