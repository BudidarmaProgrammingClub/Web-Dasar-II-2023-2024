document.title = 'Pertemuan 6 | Navbar in Sidebar'

const toggle = document.getElementById('toggle')
toggle.addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar').classList.toggle('collapse')
    let content = document.getElementById('content').classList.toggle('collapse')
});

const btnModal = document.getElementById('btn')
btnModal.addEventListener('click', function() {
    document.getElementById('card').classList.add('show');
    // document.getElementById('card').classList.toggle('show');
})

document.getElementById('back').addEventListener('click', function() {
    document.getElementById('card').classList.remove('show');
    // document.getElementById('card').classList.toggle('show');
})

document.getElementById('nav-link').addEventListener('click', function() {
    document.getElementById('dropdown').classList.toggle('show')
});