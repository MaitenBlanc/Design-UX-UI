document.addEventListener('DOMContentLoaded', () => {
    flatpickr("#datepicker-inline", {
        inline: true,
        dateFormat: "d-m-Y",
        minDate: "today"
    });

    // Selección de horario
    const timeSlotsContainer = document.getElementById('time-slots-container');
    if (timeSlotsContainer) {
        timeSlotsContainer.addEventListener('click', (event) => {
            const clickedButton = event.target.closest('.time-slot');
            if (clickedButton) {
                const currentActiveButton = timeSlotsContainer.querySelector('.active');
                if (currentActiveButton) {
                    currentActiveButton.classList.remove('active');
                }
                clickedButton.classList.add('active');
            }
        });
    }

    // Selección de plan
    const packagesContainer = document.querySelector('.our-packages-cards');
    if (packagesContainer) {
        packagesContainer.addEventListener('click', (event) => {
            const clickedButton = event.target.closest('button');
            if (clickedButton) {
                const currentActiveButton = packagesContainer.querySelector('.active');
                if (currentActiveButton) {
                    currentActiveButton.classList.remove('active');
                }
                clickedButton.classList.add('active');
            }
        });
    }
});