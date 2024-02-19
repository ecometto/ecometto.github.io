
// CONFIGURANDO BOTON DEL TEMA 
const botonTheme = document.querySelector('.onOff')
const ballTheme = document.querySelector('.ball')
const body = document.body

botonTheme.addEventListener('click', () => {
    if (ballTheme.style.left == "") {
        ballTheme.style.left = "20px"
        ballTheme.style.backgroundColor = "black";
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else if (ballTheme.style.left == "20px") {
        ballTheme.style.left = ""
        ballTheme.style.backgroundColor = "white";
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
})


// CONFIGURANDO BOTON DE "IR ARRIBA" 
const btnUp = document.getElementById('btnUp')
window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        btnUp.style.display = "block"
    } else {
        btnUp.style.display = "none"
    }
})

// CONFIGURANDO CARRUSEL
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

// CONFIGURANDO LINKS A SECCIONES 
const skillLink = document.querySelectorAll('.skillLink')
const projectsLink = document.querySelector('.projectsLink')

skillLink.forEach(link =>
    link.addEventListener('click', () => {
        const secciones = document.querySelectorAll('section')
        secciones.forEach(secc => {
            secc.style.display = "none"
        })
        secciones[2].style.display = "block"
    }))

projectsLink.addEventListener('click', () => {
    secciones.forEach(secc => {
        secc.style.display = "none"
    })
    secciones[3].style.display = "block"
})