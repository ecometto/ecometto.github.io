<<<<<<< HEAD
// CONFIGURACIÓN THEME 
=======

// CONFIGURANDO BOTON DEL TEMA 
>>>>>>> 60d18ffcbe12aaaa3470fbedd002041596b5fddc
const botonTheme = document.querySelector('.onOff')
const ballTheme = document.querySelector('.ball')
const body = document.body

botonTheme.addEventListener('click', () => {
    if (ballTheme.style.left == "") {
        ballTheme.style.left = "20px"
        ballTheme.style.backgroundColor = "black";
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    } else if (ballTheme.style.left == "20px") {
        ballTheme.style.left = ""
        ballTheme.style.backgroundColor = "white";
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
})

<<<<<<< HEAD

// CONFIGURACIÓN CARRUSEL 
=======
// CONFIGURANDO CARRUSEL
>>>>>>> 60d18ffcbe12aaaa3470fbedd002041596b5fddc
const cards = document.querySelectorAll('.carousel-item')
const secciones = document.querySelectorAll('section')

cards.forEach((card, index) => {
    secciones[index].style.display = "none"

    card.addEventListener('click', () => {
        secciones.forEach(secc => {
            secc.style.display = "none"
        })
        secciones[index].style.display = "block"
    })
    secciones[0].style.display = "block"
})

<<<<<<< HEAD

// CONFIGURACIONES VARIAS 
const linkToSkill = document.querySelectorAll('.linkToSkill')

linkToSkill.forEach(link => {
    addEventListener('click', (e) => {
        e.preventDefault()
        secciones.forEach((seccion) => {
            seccion.style.display = "none"
        })
        secciones[2].style.display = "block"
    })
=======
// CONFIGURANDO LINKS A SECCIONES 
const skillLink = document.querySelector('.skillLink')
const projectsLink = document.querySelector('.projectsLink')

skillLink.addEventListener('click', () => {
    secciones.forEach(secc => {
        secc.style.display = "none"
    })
    secciones[2].style.display = "block"
})
projectsLink.addEventListener('click', () => {
    secciones.forEach(secc => {
        secc.style.display = "none"
    })
    secciones[3].style.display = "block"
>>>>>>> 60d18ffcbe12aaaa3470fbedd002041596b5fddc
})