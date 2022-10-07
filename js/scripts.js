all = [];
listaUsers = [];
listaPlat = [];
var ind = document.getElementById("verUser").value;

function newPlataform(){
    var x = "";
    var p = document.getElementById("newPlat").value;
    var opt = document.getElementById("platCad");
    let sucPlat = document.getElementById("successPlat");

    x=x+"<option>"+p+"</option>";
    listaPlat.push(x);
    opt.innerHTML = listaPlat;

    sucPlat.classList.remove("hidden");

}

function cadastrar() {
    singular = [];
    let sucCad = document.getElementById("successCad");
    let errorCad = document.getElementById("dangerCad");

    var name = document.getElementById("nomeCad").value;
    var user = document.getElementById("usuarioCad").value;
    var em = document.getElementById("emailCad").value;
    var date = document.getElementById("dataCad").value;
    var plat = document.getElementById("platCad").value;

    if (name && user && em && date) {
        singular.push(user, name, em, date, plat);
        all.push(singular);
        listaUsers.push(singular[0]);

        sucCad.classList.remove("hidden");
        errorCad.classList.add("hidden");
        
    } else {
        sucCad.classList.add("hidden");
        errorCad.classList.remove("hidden");
    }

}

function visualizarAll() {
    var x = "";
    var cont = 0;
    var u = document.getElementById("verUser");

    listaUsers.forEach(function() {
        x=x+"<option>"+listaUsers[cont]+"</option>";
        cont++;
    });

    u.innerHTML = x;

    u.addEventListener("change", function(){
        indiceopt = this.selectedIndex;
        mostrarDados(indiceopt, all);
    })

}

function mostrarDados(indiceopt, all){
    var verNome = all[indiceopt][1];
    var verEmail = all[indiceopt][2];
    var verData = all[indiceopt][3];

    document.getElementById("showName").value = verNome;
    document.getElementById("showEmail").value = verEmail;
    document.getElementById("showDate").value = verData;

    visualizarAll();

}

function mudar() {
    novoNome = document.getElementById("showName").value;
    novoEmail = document.getElementById("showEmail").value;
    novaData = document.getElementById("showDate").value;

    all[indiceopt][1] = novoNome;
    all[indiceopt][2] = novoEmail;
    all[indiceopt][3] = novaData;

    visualizarAll();
}

function excluir() {
    all.splice(indiceopt);

    visualizarAll();
}