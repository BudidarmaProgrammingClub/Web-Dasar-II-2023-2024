const btnToggle = document.getElementById('toggleButton')
btnToggle.addEventListener('click', function () {
    let menu = document.getElementById('menu')
    if (menu.classList.toggle('active')) {
        btnToggle.innerHTML = '<i class="fa fa-xmark"></i>'
    } else {
        btnToggle.innerHTML = '<i class="fa fa-bars"></i>'
    }
})