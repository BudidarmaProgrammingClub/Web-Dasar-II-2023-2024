document.title = 'Pertemuan 4 | Sidebar'

const toggle = document.getElementById('toggle')
toggle.addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar').classList.toggle('collapse')
    let content = document.getElementById('content').classList.toggle('collapse')
});