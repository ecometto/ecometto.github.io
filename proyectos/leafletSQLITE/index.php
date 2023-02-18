<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- LEAFLET  -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="static/styles.css">
    <title>Document</title>

</head>

<body>
    <main class="container">
        <section class="map-container">
            <a href="generate.php" class="boton ">Generar Movimientos</a>

            <div id="map">
            </div>
        </section>

        <section class="data-container">
            <h2>prueba <button id="getAll">prueba</button></h2>
            <div class="row mb-3">
                <div class="col-md-4">
                    limpiar mapa <button class="btn btn-warning" id="clear" style="border-radius: 5px; color: white">Limpiar</button>
                </div>
                <div class="col-md-4 ">
                    mostrar iconos <button class="btn btn-success" id="show" style="border-radius: 5px; color: white">Show</button>
                </div>
                <div class=" col-md-3 selector-botones mb-3">
                Choose buttons color: <input type="color" class="" id="colorPrimario" value="#001122">
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    Filtrar movil:
                    <select class="form-select" id="selectMovil">
                        <option value="" selected disabled>Select a movil</option>
                        <option value="1">movil 1</option>
                        <option value="2">movil 2</option>
                        <option value="3">movil 3</option>
                    </select>
                </div>
                <div class="col-md-4">
                    Filtrar fecha: <input type="date" class="form-control" id="fecha">
                </div>
                <div class="col-md-4">
                    <label for="all">Mostrar todo: </label> 
                    <input type="checkbox" name="" id="all" value ="1" checked>
                </div>
            </div>





            <h3 class="text-center">LISTADO DE MOVIMIENTOS</h3>

            <table class="table table-light">
                <thead class="thead-light">
                    <tr>
                        <th>id</th>
                        <th>vehiculo</th>
                        <th>fecha</th>
                        <th>latitud</th>
                        <th>longitud</th>
                        <th>acciones</th>

                    </tr>
                </thead>
                <tbody id="tbody">

                </tbody>
            </table>
        </section>

    </main>
    <footer>
        pie de pagina
    </footer>

    <!-- LEAFLET  -->
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <!-- JQUERY  -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="static/app.js"></script>

</body>

</html>