//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome screen button
const letsGoBtn = document.getElementById('letsGoBtn');
const loading = document.getElementById('loading');
const mainContent = document.getElementById('mainContent');

letsGoBtn.addEventListener('click', () => {
    letsGoBtn.style.display = 'none';
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 2000); // Simulates 2 seconds of loading
});
