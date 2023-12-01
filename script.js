window.onload=inicio;
const URLPAISES = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
const URLDEPORTES = "deportes.json";
const URLEQUIPOS = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=";
var comboPaises = document.getElementById("paises");
var comboDeportes =document.getElementById("deportes");
var contenido = document.getElementById("equipos");
//contenido.className="contenedor";
function inicio(){

    obtenerPaises();
    obtenerDeportes();
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

async function obtenerDeportes(){
    const response= await fetch(URLDEPORTES);
    const data = await response.json();
    for(let i = 0;  i < data.sports.length;i++){
        console.log("entra ");
        let option=document.createElement("option");
        option.value=data.sports[i].strSport;
        option.textContent=data.sports[i].strSport;
        comboDeportes.appendChild(option);
    }
}

async function accion(){
        contenido.innerHTML="";
    const response = await fetch(URLEQUIPOS+comboDeportes.value+"&c="+comboPaises.value);
    const data = await response.json();

        for(let i= 0; i<data.teams.length;i++){
        
        let d=document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",data.teams[i].strTeamBadge);
        d.appendChild(img);
        d.className="equipo";
        contenido.appendChild(d);



        }


}