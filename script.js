document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projetoContainers = document.querySelectorAll('.projeto-container');

    projetoContainers.forEach(container => {
        container.addEventListener('mouseover', () => {
            container.style.animationPlayState = 'paused';
        });

        container.addEventListener('mouseout', () => {
            container.style.animationPlayState = 'running';
        });
    });
});
