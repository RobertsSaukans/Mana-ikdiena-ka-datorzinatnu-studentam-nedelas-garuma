// Režīmu pārslēgšana
const toggleBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;

toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    toggleBtn.textContent = newTheme === 'light' ? 'Tumšais režīms' : 'Gaišais režīms';
});

// Saglabā lietotāja izvēlēto režīmu pēc lapas pārlādes
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlTag.setAttribute('data-theme', savedTheme);
    toggleBtn.textContent = savedTheme === 'light' ? 'Tumšais režīms' : 'Gaišais režīms';
}

const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');
const contentArea = document.querySelector('.content-area');

contentArea.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (contentArea.scrollTop >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});