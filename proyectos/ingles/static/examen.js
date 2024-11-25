
import { data } from "./data.js";

const form = document.getElementById("form")
// const resultContainer = document.querySelector('.result-container')
const levelChoisses = document.getElementById('levels')
const nombre = document.getElementById('nombre')
const resultContainer = document.querySelector('.result-container')
let filteredQuestions = [];
let levelChoiced;


form.innerHTML = ""


/* rellenar select 'niveles' de examen */
const levels = data.levels
levels.forEach(level => {
    levelChoisses.innerHTML += `<option value="${level}">${level}</option>`
}
)
nombre.focus()



/* cargar formulario según nivel elegido */
levelChoisses.addEventListener('change', (level) => {
    const questions = data.questions;
    let count = 1;
    form.innerHTML = "";
    levelChoiced = level.target.value;

    filteredQuestions = questions.filter((question) => {
        return question.level == levelChoiced;
    });

    filteredQuestions.forEach((q) => {
        form.innerHTML += `
            <p class="my-3">
                ${count}. ${q.first} __________ ${q.second}. <br>
                <div class="flex">
                    ${q.options.map((opc, index) => `
                            <label class="mx-4" for="id${count}-${index + 1}"> 
                                <input type="radio" name="question-${count}" id="id${count}-${index + 1}" value="${opc}" ${index == 0 ? 'checked' : ''}>
                             ${opc} </label>
                                        `).join("")}
                </div>
                <hr>
            </p>
        `;
        count++;
    });

    form.innerHTML += ` <button type="submit" class="btn btn-primary" id="send">Enviar</button>`

})



/* obtener resultados de examen */
form.addEventListener('submit', (e) => {

    e.preventDefault()
    const result = document.getElementById("result")
    resultContainer.style.display = "block"
    let texto = ""

    const answers = document.querySelectorAll('input[type="radio"]:checked')
    let right = 0

    filteredQuestions.forEach((question, index) => { 
        if(answers[index].value === question.right){
            console.log('hola');
            texto += ` <li>Respuesta ${index+1}: "CORRECTA" </li>`
            right++
        }
        else{
            texto += `<li>Respuesta ${index+1}: "INCORRECTA". La correcta es '<i>${question.right}</i>' </li>`
        };
    })

    texto += `<p class="fw-bold my-4"> 
                    Respuestas correctas: ${right}<br>
                    Respuestas incorectas: ${filteredQuestions.length - right}
                </p>`

    let msgToTeacher = `Hola,%20soy%20${nombre.value.toUpperCase()}.%0ARealicé%20el%20formulario%20nivel%20${levelChoiced}.%20Tuve%20${right}%20respuestas%20correctas%20.%0AQuisiera%20obtener%20más%20información%20sobre%20las%20clases`

    texto += `
                        <hr class="my-2">
                        <h4>Envíale los resultados a tu profe favorito...</h4>
                        <div class="d-flex flex-md-row flex-sm-column m-4">
                            <div style="height:50px" class="m-2" >
                                <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493516776075&text=${msgToTeacher}"> <img  src="static/img/tani.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" ></img>Tani</a>
                            </div>

                            <div style="height:50px" class="m-2" >
                                <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493547651270&text=${msgToTeacher}"><img  src="static/img/ori.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" >Ori</img></a>
                            </div>

                            <div style="height:50px" class="m-2" >
                                <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493547651270&text=${msgToTeacher}"> <img  src="static/img/rocy.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" >Rocy</img></a>
                            </div>

                            
                            </div>
                            
                            <h5><a href="./index.html">Volver a Inicio</a></h5>
                        
                        `
    result.innerHTML += texto

    window.scrollTo(0, document.body.scrollHeight);
    
    const inputs = document.querySelectorAll('input[type="radio"]')
    inputs.forEach(input=>{
        input.setAttribute('disabled', 'disabled')
    })

})


// function generarRespuesta(answers) {

//     let arraySelected = []
//     let rightAnswers = filteredQuestions.map(q => q.right)
//     let wrongAnswer = 0
//     let rightAnswer = 0

//     result.innerHTML = ""
//     result.innerHTML += `
//     <p>Gracias <b>${nombre.value.toUpperCase()}</b> por participar. !! Tus resultados son:</p><br>
//     `
//     answers.forEach((cada) => {
//         arraySelected.push(cada.value)
//     })

//     for (let i = 0; i < rightAnswers.length; i++) {
//         if (arraySelected[i] == rightAnswers[i]) {
//             var choice = "Correct"
//             rightAnswer++
//         }
//         else {
//             choice = "Incorrect"
//             wrongAnswer++
//         }

//         resultContainer.style.display = "block"

//         result.innerHTML += `
//         <li>${i + 1} - Ingresado: <b><i>${arraySelected[i]}</i></b> - Respuesta correcta: <b><i> ${rightAnswers[i]}</i></b> <br> Your choice was...: 
//         <span class="${choice === 'Correct' ? 'bg-success' : 'bg-warning'} p-1">${choice}</span>
//         </li>
//         <br> 
//     `}

//     let puntaje = (rightAnswer / arraySelected.length) * 100

//     result.innerHTML += `<p class="fw-bold"> 
//     Respuestas correctas: ${rightAnswer}<br>
//     Respuestas incorectas: ${wrongAnswer}<br>
//     Puntaje: ${puntaje} % ${puntaje > parseInt(60) ? 'APROBADO' : 'NECESITAS MAS PRACTICA'}
//     </p>`

//     let msgToTeacher = `Hola,%20soy%20${nombre.value.toUpperCase()}.%0ARealicé%20el%20formulario%20nivel%20${levelChoiced}.%20Tuve%20${rightAnswer}%20respuestas%20correctas%20y%20${wrongAnswer}%20incorrectas.%0AQuisiera%20obtener%20más%20información%20sobre%20las%20clases`

//     result.innerHTML += `
//                         <hr class="my-2">
//                         <h4>Envíale los resultados a tu profe favorito...</h4>
//                         <div class="d-flex flex-md-row flex-sm-column m-4">
//                             <div style="height:50px" class="m-2" >
//                                 <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493516776075&text=${msgToTeacher}"> <img  src="static/img/tani.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" ></img>Tani</a>
//                             </div>

//                             <div style="height:50px" class="m-2" >
//                                 <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493547651270&text=${msgToTeacher}"><img  src="static/img/ori.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" >Ori</img></a>
//                             </div>

//                             <div style="height:50px" class="m-2" >
//                                 <a class="my-2" target="_blank" href="https://api.whatsapp.com/send?phone=5493547651270&text=${msgToTeacher}"> <img  src="static/img/rocy.jpg" style="border-radius:50%; height:50px" class="img-fluid mx-2" >Rocy</img></a>
//                             </div>

                            
//                             </div>
                            
//                             <h5><a href="./index.html">Volver a Inicio</a></h5>
                        
//                         `

//     answers.forEach(el => el.setAttribute('disabled', 'true'))
//     levelChoisses.setAttribute('disabled', 'true')
//     nombre.setAttribute('disabled', 'disabled')
//     nombre.value = ""
// }









