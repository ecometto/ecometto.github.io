<?php include_once(__DIR__ . './helpers/header.php');
?>

<div class="container">


    <h3 class="text-center mt-4 bg-secondary">EVALUACION ORIENTATIVA</h3>

    <div>

        <div class="row">
            <div class="form-group col-md-6 p-4">
                <div class="d-md-flex align-items-center">
                    <label for="levels" class="form-text text-end mx-3 col-12 col-md-6 mb-2">Choose your level</label>
                    <select id="levels" class="rounded col-12 col-md-6 p-1">
                        <option value="" selected disabled>Select...</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            Nombre: <input class="form-control" id="nombre" type="text" placeholder="Ingresa tu nombre"> <br>
        </div>
        <form id="form">
            <!-- aqui se cargará dinamicamente el contenido del formulario con js.js  -->
        </form>

    </div>

    <hr class="m-4">
    <div class="result-container">
        Test result:
        <ul id="result">
            <!-- Aqui iran las respuestas  -->
        </ul>
    </div>
</div>



<?php include_once(__DIR__ . './helpers/footer.php');
