window.onload=inicio;
const URLPAISES = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
const URLDEPORTES = "deportes.json";
const URLEQUIPOS = "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=";
var comboPaises = document.getElementById("paises");
var comboDeportes =document.getElementById("deportes");
var contenido = document.getElementById("equipos");
function inicio(){

    obtenerPaises();
    obtenerPaises();
    comboPaises.addEventListener("change",accion);
    comboDeportes.addEventListener("change",accion);
    
}

   async  function obtenerPaises(){
    const response= await fetch(URLPAISES);
    const data = await response.json();
    for(let i = 0;  i < data.countries.length;i++){
        let option=document.createElement("option");
        option.value=data.countries[i].name_en;
        option.textContent=data.countries[i].name_en;
        comboPaises.appendChild(option);

        // comboPaises.innerHTML=`
        // <option value=${data.countries[i].name_en}>
        // ${data.countries[i].name_en}</option>
        // `;
    }
}

function obtenerDeportes(){

}

function accion(){
        
}