const btnToggle = document.getElementById('toggleButton')
btnToggle.addEventListener('click', function () {
    let menu = document.getElementById('menu')
    if (menu.classList.toggle('active')) {
        btnToggle.innerHTML = '<i class="fa fa-xmark"></i>'
    } else {
        btnToggle.innerHTML = '<i class="fa fa-bars"></i>'
    }
})

// toggleTheme
const toggletheme = document.getElementById('toggleTheme')
toggletheme.addEventListener('click', function () {
    if (document.querySelector('html').classList.toggle('dark')) {
        toggletheme.innerHTML = '<i class="fa fa-sun"></i>';
    } else {
        toggletheme.innerHTML = '<i class="fa fa-moon"></i>';
    }
})