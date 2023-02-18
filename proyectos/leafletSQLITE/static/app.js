window.addEventListener('load', () => {

    // VARIABLES 
    var lat = -31.41;
    var lng = -64.186;
    var datos = null;
    const tbody = document.getElementById('tbody')
    const selectMovil = document.getElementById('selectMovil')
    const fecha = document.getElementById('fecha')
    const limpiar = document.getElementById('clear')
    const show = document.getElementById('show')
    const all = document.getElementById('all')



    // ADDEVENTLISTENERS 
    // cambiando color de los botones 
    let inputColor = document.getElementById('colorPrimario')
    inputColor.addEventListener('change', () => {
        document.querySelector(':root').style.setProperty('--primario', inputColor.value);
    })
    // mostrando todo
    all.addEventListener('change', () => {
        buscarDatos()
    })
    // filtrando por movil 
    selectMovil.addEventListener('change', (e) => {
        removeMarker()
        all.checked = false  
        let movil = e.target.value
        // getDataByMovil(movil)
        buscarDatos()
    })
    //filtrando por fecha
    // fecha.addEventListener('change', (e)=>getDataFecha(e.target.value))
    fecha.addEventListener('change', (e) => {
        all.checked = false
        buscarDatos()})
    // Eliminando marcadores 
    limpiar.addEventListener('click', () => { 
        removeMarker()
    })
    //mostrando marcadores
    show.addEventListener('click', () => getAllData())



    // CARGANDO MAPA 
    var map = L.map('map').setView([lat, lng], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var mark = new L.Marker([lat, lng])
    // map.addLayer(mark)




    // --------------------------------------------------------------------------------------------- 
    // prueba funcion busqueda generica
    // const getAll = document.getElementById('getAll')
    // getAll.addEventListener('click', ()=> buscarDatos())


    buscarDatos()
    // --------------------------- 


    function buscarDatos() {
        let vehiculo = selectMovil.value
        let fecha1 = fecha.value
        let todo = all.checked
        $.ajax({
            type: "GET",
            url: "back/sql.php",
            data: {
                vehiculo: vehiculo,
                fecha1: fecha1,
                todo: todo
            },
            success: function (res) {
                datos = JSON.parse(res)
                if (datos.length !== 0){
                    showData(datos)
                }
                else{
                    tbody.innerHTML = "";
                    tbody.innerHTML = "No hay datos para mostrar con los criterios seleccionados";
                }
             }
            ,
            error: function (error) {
                console.log(error);
            }
        })

    }


    function showData(datos) {
        tbody.innerHTML = "";
        removeMarker()
        datos.forEach(element => {
            tbody.innerHTML += `
                    <tr>
                            <td> ${element.id_mov}</td> 
                            <td> ${element.id_vehiculo}</td> 
                            <td> ${element.fecha}</td> 
                            <td> ${element.lat}</td> 
                            <td> ${element.lng}</td> 
                            <td>
                                <button class='btn b1 boton-posicion' id='${element.id_mov}'> Ver en mapa </button>
                            </td> 
                    </tr>`;
            addMarker(element, element.id_mov)
        });
        botones = document.querySelectorAll('.b1');
        for (boton of botones) {
            boton.addEventListener('click', (e) => {
                getDataId(e)
            })
        };
    }



    function addMarker(element, markName) {
        markName = L.marker([element.lat, element.lng]).addTo(map)
        // mark.bindPopup(`movil: ${element.id_vehiculo} </br> Fecha: ${element.fecha} </br>Latitud: ${element.lat} </br>Longitud: ${element.lng}`).addTo(map);
    }


    function removeMarker() {
        map.eachLayer(function (layer) {
            if (layer.options.pane === "markerPane") {
                map.removeLayer(layer)
            }
        });
    }

})