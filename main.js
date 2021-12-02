var gualmarp = [];

function submit() {
    var cosa_1 = document.getElementById("nombre_cosa_1").value;
    var cosa_2 = document.getElementById("nombre_cosa_2").value;
    var cosa_3 = document.getElementById("nombre_cosa_3").value;
    var cosa_4 = document.getElementById("nombre_cosa_4").value;
    gualmarp.push(cosa_1);
    gualmarp.push(cosa_2);
    gualmarp.push(cosa_3);
    gualmarp.push(cosa_4);
    gualmarp.push(document.getElementById("nombre_cosa_5").value);
    gualmarp.push(document.getElementById("nombre_cosa_6").value);
    gualmarp.push(document.getElementById("nombre_cosa_7").value);
    gualmarp.push(document.getElementById("nombre_cosa_8").value);
    gualmarp.push(document.getElementById("nombre_cosa_9").value);
    gualmarp.push(document.getElementById("nombre_cosa_10").value);
    gualmarp.push(document.getElementById("nombre_cosa_11").value);
    gualmarp.push(document.getElementById("nombre_cosa_12").value);
    document.getElementById("ver_nombre").innerHTML = gualmarp;
    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";
}

function sorting() {
    gualmarp.sort();
    document.getElementById("ver_nombre").innerHTML = gualmarp;
}