document.title = 'Pertemuan 5 | Modal'

const toggle = document.getElementById('toggle')
toggle.addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar').classList.toggle('collapse')
    let content = document.getElementById('content').classList.toggle('collapse')
});

const btnModal = document.getElementById('btn')
btnModal.addEventListener('click', function() {
    document.getElementById('card').classList.toggle('show');

})