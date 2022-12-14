function saludar() {
    alert("Bienvenidos a Turnos Online Espacio Psicopedagogía");
}

saludar();


const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

title.innerHTML = 'Turnos Online - <span>Espacio Psicopedagogía</span>'

const fragment = document.createDocumentFragment()

for(const day of days) {
  const selectItem = document.createElement('OPTION')
  selectItem.setAttribute('value', day.toLowerCase())
  selectItem.textContent = day
  fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)

const usuarios = [
  { id: 1, dni: "47100321", nombre: "emilia", edad: 15, os: "visitar", },
  { id: 2, dni: "54523987", nombre: "nicolas", edad: 7,  os: "visitar", },
  { id: 3, dni: "49310523", nombre: "lucas", edad: 13,  os: "ospecon", },
  { id: 4, dni: "52584852", nombre: "juan", edad: 14,  os: "ioma", },
];

let nombre = prompt("Ingrese usuario del beneficiario");
let identificador = false;

for (const usuario of usuarios) {
    if (usuario.nombre === nombre) {
        identificador = true;
    }
}

if (identificador) {
  alert("Solicite turno");
} else {
  alert("Complete los datos del beneficiario");
  let entrada = prompt("Ingrese Celular");
        entrada = prompt ("Ingrese domicilio del paciente");
        entrada = prompt ("Ingrese Fecha de nacimiento del paciente");
        entrada = prompt ("Ingrese localidad del paciente");
        entrada = prompt ("Ingrese Obra Social del paciente");
    alert("Solicite turno") 
}