window.addEventListener('load', () => {


    // CARGANDO MAPA 
    var map = L.map('map').setView([-31.42, -64.189], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([-31.42, -64.189]).addTo(map);


    // VARIABLES -------------------------------
    var tbody = document.getElementById('tbody')
    const random = document.getElementById('random')
    const prueba = document.getElementById('prueba')
    const selectMovil = document.getElementById('selectMovil')
    const fecha = document.getElementById('fecha')
    const all = document.getElementById('all')
    const clearMarkers = document.getElementById('clear')
    const showMarkers = document.getElementById('show')
    const deleteAll = document.getElementById('deleteAll')
    var botonesUnico = []





    // ADDEVENTLISTENER -------------------------
    random.addEventListener('click', () => getRandom())
    selectMovil.addEventListener('change', () => getFilteredData())
    fecha.addEventListener('change', () => getFilteredData())
    all.addEventListener('click', () => {
        selectMovil.value = ""
        fecha.value = "";
        allData = getData()
        showData(allData)
    })
    clearMarkers.addEventListener('click', () => removeMarker())
    showMarkers.addEventListener('click', () => {
        selectMovil.value = ""
        fecha.value = "";
        allData = getData()
        showData(allData)
    })
    deleteAll.addEventListener('click', () => {
        let sure = confirm("Está seguro? esto borrará todos los registros.")
        if (sure) {
            localStorage.clear()
            removeMarker()
            allData = getData()
            showData(allData)
        }
    })


    // ---------------------------------------------- 
    // LOADING DATA IN PAGE 
    // ---------------------------------------------- 
    allData = getData()
    showData(allData)


    // FUNCIONES: -------------------------------
    //GETTING DATA FROM LOCALSTORAGE
    function getData() {
        let datos = ""
        if (localStorage.getItem('data')) {
            datos = JSON.parse(localStorage.getItem('data'))
        } else {
            datos = []
        }
        return datos
    }

    // SHOWING DATA
    function showData(datos) {
        if (datos.length !== 0) {
            // removing datatable instance to "actualice" data 
            // $('#myTable').DataTable().clear().destroy();

            // EMPYING THE TABLE AND RE-CHARGIND DATA
            tbody.innerHTML = "";
            removeMarker()

            for (dato of datos) {
                tbody.innerHTML += `
                <tr>
                <th>#</th>
                <th>${dato.vehiculo}</th>
                <th>${dato.fecha}</th>
                <th>${dato.lat}</th>
                <th>${dato.lng}</th>
                <th><button id=${dato.fecha} class="btn unique btn-secondary">show</button></th>
                </tr>
                `
                // ADDING MARKERS
                var marker = L.marker([dato.lat, dato.lng]).addTo(map);

            }

            // re-creating instance datatable (removed some lines before) 
            // $('#myTable').DataTable({
            //     scrollY: 300,
            //     paging: true
            // });



            // FILTRAR POR UNA SOLA COLUMNA DE BUSQUEDA (FILTRA EN LA SEGUNDA COLUMNA (1))
            // $('input[type="search"]').unbind().bind('keyup', function () {
            //     table.column(1).search(this.value).draw();
            // });
        } else {
            tbody.innerHTML = "";
            tbody.innerHTML = "NO HAY DATOS PARA MOSTRAR";
        }

        botonesUnico = document.querySelectorAll('.unique')
        botonesUnico.forEach(boton => {
            boton.addEventListener('click', (e) => {
                allData = getData()
                let filteredId = allData.filter((element)=>element.fecha == e.target.id)
                showData(filteredId)
            })
        })

    }

    // FILTER DATA
    function getFilteredData() {
        datos = getData()
        var ve = selectMovil.value
        var fe = fecha.value
        var filtered2 = []

        // console.log("fecha", fe);
        // console.log("vehiculo", ve);

        if (fe !== "" && ve !== "") {
            filtered2 = datos.filter(element => {
                return element.vehiculo == ve && (element.fecha).substring(0, 10) == fe
            })
        }
        else if (ve !== "") {
            filtered2 = datos.filter(element => element.vehiculo == ve)
            console.log(filtered2);
        }
        else {
            filtered2 = datos.filter(element => (element.fecha).substring(0, 10) == fe)
            console.log(filtered2);
        }

        showData(filtered2)
        all.checked = false
    }

    // GENERAR DATOS ALEATORIOS  
    function getRandom() {

        let vehiculo = Math.round((Math.random() * (3.5 - 0.5) + 0.5))
        let lat = ((Math.random() * (31550 - 31350) + 31350) / -1000).toFixed(4)
        let lng = ((Math.random() * (64300 - 64100) + 64100) / -1000).toFixed(4)

        let obj = {
            vehiculo: vehiculo,
            fecha: new Date(),
            lat: lat,
            lng: lng,
        }

        storageData(obj)
        allData = getData()
        showData(allData)
    }


    function storageData(obj) {
        allData = getData()
        allData.push(obj)
        localStorage.setItem("data", JSON.stringify(allData))
    }

    function removeMarker() {
        map.eachLayer(function (layer) {
            if (layer.options.pane === "markerPane") {
                map.removeLayer(layer)
            }
        });
    }

})

