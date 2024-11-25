


const header = document.getElementById('header')



// renderizar header en la hoja correspondiente:
header.innerHTML = "";
header.innerHTML =        ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid ">
    <a class="navbar-brand" href="index.html">
        <img src="./static/img/logo.jpg" alt="" height="60px" style="border-radius:50%;">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" href="nosotros.html">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" href="examen.html">Auto-Evaluación</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" href="contacto.html">Contactos/Profes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" href="tips.html">TIPS</a>
            </li>

        </ul>
    </div>
</div>
</nav>
`

   

        // Obtiene el nombre del archivo actual
const currentPage = window.location.pathname.split('/').pop(); // Solo obtiene "index.html", "nosotros.html", etc.

// Selecciona todos los enlaces del navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Recorre los enlaces y compara el href con la página actual
navLinks.forEach(link => {    
    link.classList.remove('active'); // Remueve la clase 'active' de todos los enlaces
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
    }
});


