document.title = 'Navbar | Pertemuan 3'

const toggle = document.getElementById('button')
toggle.addEventListener('click', function() {
    document.getElementById('navbar-content').classList.toggle('active');
});