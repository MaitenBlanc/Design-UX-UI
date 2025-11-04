flatpickr("#datepicker-inline", {
        inline: true,
        dateFormat: "d-m-Y",
        minDate: "today"
    });

    const timeSlotsContainer = document.getElementById('time-slots-container');
    timeSlotsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('time-slot')) {
            const oldActiveTime = timeSlotsContainer.querySelector('.active');
            if (oldActiveTime) {
                oldActiveTime.classList.remove('active');
            }
            event.target.classList.add('active');
        }
    });

    // Seleccion de horario
    document.addEventListener('DOMContentLoaded', () => {
    const timeSlotsContainer = document.getElementById('time-slots-container');
    timeSlotsContainer.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.classList.contains('time-slot')) {
            event.preventDefault(); 
            const currentActiveButton = timeSlotsContainer.querySelector('.active');
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active');
            }
            clickedButton.classList.add('active');
        }
    });
});