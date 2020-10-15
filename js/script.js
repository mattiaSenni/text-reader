window.addEventListener("scroll", function(){
    if (window.pageYOffset > 300) {
        document.getElementById("backToTop").style.display = "block";
    }
    else{
        document.getElementById("backToTop").style.display = "none";
    }
    if(window.pageYOffset > 10){
        document.getElementById("nav-grande").style.opacity="0.7";
    }
    else{
        document.getElementById("nav-grande").style.opacity="1";
    }
});

document.getElementById("nav-grande").addEventListener("mouseover", function(){
    document.getElementById("nav-grande").style.opacity="1";
})
document.getElementById("nav-grande").addEventListener("mouseout", function(){
    if(window.pageYOffset > 10){
        document.getElementById("nav-grande").style.opacity="0.7";
    }
    else{
        document.getElementById("nav-grande").style.opacity="1";
    }
})

//variabili utili ai fini del corretto funzionamento del sito

var testo = "";
var testoPrec = "";

try {    
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;    
    var recognition = new SpeechRecognition();  
}  
catch(e) {    
    console.error(e);   
}

window.addEventListener("load", function(){
    
    MakeHome('#343434', 'white');
    document.getElementById("home").style.display="none";
    document.getElementById("home").style,display="none";
    document.getElementById("setting").style.display="none";
    document.getElementById("scrivi").style.display="none";
    document.getElementById("scrivi").style.display="none";
    document.getElementById("letturaVeloce").style.display="none";
    document.getElementById("cronologia").style.display="none";
    document.getElementById("introduzione").style.display="none";
    setTimeout(() => {
        try{
            $("#simbolo").hide(1500);
            $("#introduzione").show(1500);
            document.getElementById("introduzione-sfondo").classList.add("introduzione-sfondo");
        }catch(e){
            this.alert("errore nel caricamento delle risorse, si prega di ricaricare la pagina");
        }
    }, 1500);
    
    
        

    
});

var velocitaLettura = 1;
var speech = new SpeechSynthesisUtterance();
function readOutLoud(message) {           
    try{
        // Set the text and voice attributes.    
    speech.text = message;    
    speech.volume = 1;    
    speech.rate = 1;    
    speech.pitch = 1;   
    speech.rate=velocitaLettura;
    speech.voiceURI = "native";
    speech.lang = "it-IT";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
    ShowMediaPlayer(true);
    //speechSynthesisUtteranceInstance.onend = Leggi();     
    //isReading = !isReading;
    speech.onend = function(){
        ShowMediaPlayer(false);
        isReading = false;
        document.getElementById("riproduci").innerHTML="leggi il testo";
        document.getElementById("tRiproduci").innerHTML="leggi il testo";//mini-
        document.getElementById("playIcon").innerHTML="<path  d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/>";
    };  
    }catch(e){
        alert("audio non riproducibile");
    }
}
var isReading = false;
function Leggi(){
    if(!isReading){
        readOutLoud(testo);
        document.getElementById("riproduci").innerHTML="ferma la lettura";
        document.getElementById("tRiproduci").innerHTML="ferma la lettura";
        document.getElementById("playIcon").innerHTML="<path d='M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z'/>";
        isReading = true;
    }
    else{
        window.speechSynthesis.cancel();
        isReading = false;
        document.getElementById("riproduci").innerHTML="leggi il testo";
        document.getElementById("tRiproduci").innerHTML="leggi il testo";
        document.getElementById("playIcon").innerHTML="<path  d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/>";
    }
}

function ChangeVelocitaLettura(n){
    velocitaLettura = n;
}





function ShowOption(apri){
    if(apri)
        document.getElementById("option").style.display="block";
    else
        document.getElementById("option").style.display="none";
}

function ApriTesto(){
    $("#cronologia").hide(1500);
    $("#letturaVeloce").hide(1500);
    $("#home").hide(1500);
    $("#introduzione").hide(1500);
    $("#scrivi").show(1500);
    momento = 4;
}

var getId = 0;
var cronologiaCompleta = new Array();
function ChiudiTesto(){       
    document.getElementById("testo").innerHTML= GetString(document.getElementById("scriviTesto").value)
    document.getElementById("scrivi").style.display="none";
    document.getElementById("home").style.display="block";
    document.getElementById("introduzione").style.display="none";
    document.getElementById("riproduci").style.display="inline";
    document.getElementById("btnShowVelocita").style.display="inline";
    momento = 1;
    if(document.getElementById("testo").innerHTML==".<br>"){
        document.getElementById("home").style.display="none";
        document.getElementById("introduzione").style.display="block";
        document.getElementById("riproduci").style.display="none";
        document.getElementById("btnShowVelocita").style.display="none";
        momento = 3;
    }

    if(testo != testoPrec && testo != ". "){
        var preCron = "";
        preCron += document.getElementById("raccolta").innerHTML;
        //faccio il testo html per l'elemento della cronologia
        var cron = "<div id='" + getId + "a'>" + "<div class='row'><div class='col-3 col-lg-1'><button class='btn btn-info width-max margin-bottom new-btn' onclick='readCron(" + getId + ")' title='riproduci'>"+codeEarBuds()+"</button><br><button class='btn btn-danger width-max new-btn' onclick='delCron(" + getId + ")' title='cancella'>"+ codeTrash()+"</button></div><div class='col-9 col-lg-11' id='" + getId + "testo'>" + testo +"</div></div>" + "<hr>" + "</div>" + preCron;
        getId++;
        cronologiaCompleta[getId] = testo;
        document.getElementById("raccolta").innerHTML = cron;
        testoPrec = testo;
        document.getElementById("alert-testo").innerHTML="testo copiato con successo, testo aggiungo alla cronologia";
    }
    else{        
        if(testo == ". "){            
            document.getElementById("alert-testo").innerHTML="testo cancellato";
        }
        else{
            document.getElementById("alert-testo").innerHTML="testo copiato con successo";
        }
    }
    
    document.getElementById("alert-testo").classList.remove("display-none");
    document.getElementById("alert-testo").classList.add("display");
    setTimeout(function(){
        document.getElementById("alert-testo").classList.add("display-none");
        document.getElementById("alert-testo").classList.remove("display");
    },2000);
}

function codeTrash(){
    return '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + 
    '<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>'+
    '</svg>'
}

function codeCopy(){
    return '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-files" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
    '<path fill-rule="evenodd" d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z"/>' +
    '<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>' +
    '</svg>'
}

function codeEarBuds(){
    return '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-earbuds" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'
    +'<path fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>'
    +'</svg>'
}

function copyCron(r){
    var elemento = document.createElement("input");
    elemento.value = document.getElementById(r + "testo").innerHTML;
    document.querySelector(elemento);
    document.execCommand("copy");
    
}

function readCron(r){
    testo = document.getElementById(r + "testo").innerHTML;
    document.getElementById("scriviTesto").value = testo;
    document.getElementById("testo").innerHTML = testo;
    Leggi();
}

function copfffffyCron(v){
    console.log("sarà presto disponibile");
}

function delCron(t){
    document.getElementById(t + "a").innerHTML="";
}

function GetString(stringa){
    MakeTesto(stringa);
    var s = stringa.split(".");
    var toReturn = "";
    for(var i = 0; i < s.length; i++){
        var s2 = s[i].split("--");
        for(var j = 0; j < s2.length; j++){
            if(j > 0) {
                toReturn += "<hr>" + s2[j];
            }
            else{
                toReturn += s2[j];
            }
        }
        toReturn+=".<br>";
    }
    return toReturn;
}

function MakeTesto(stringa){
    testo="";
    var pre = stringa.split("--");
    for(var i = 0; i < pre.length; i++){
        testo += pre[i]+ ". ";
    }
}

function MakeHome(back, write){
    document.body.style.background=back;
    document.body.style.color=write;
    document.getElementById("icon").style.color=write + "!important";
    document.getElementById("nav-grande").style.color=write + "!important";
    document.getElementById("nav-small").style.color=write + "!important";
    document.getElementById("chooseBack").value= back;
    document.getElementById("chooseFont").value = write;
    document.getElementById("botton-intro").style.borderColor=back;
}

function Orientamento(type){
    document.getElementById("testo").style.textAlign=type;
    document.getElementById("raccolta").style.textAlign=type;
    
}

function ChangeSize(v){
    document.getElementById("testo").style.fontSize=v+"px";
    document.getElementById("letturaVeloce").style.fontSize=v+"px";
    document.getElementById("raccolta").style.fontSize=v+"px";
    document.getElementById("lblCarattere").innerHTML= v + " px";
}

function InvioSetting(){
    console.log(document.getElementById("chooseBack").value + ", " +document.getElementById("chooseFont").value);
    MakeHome(document.getElementById("chooseBack").value, document.getElementById("chooseFont").value)                
}

var menuOpen = false;
function ShowMenu(){
    if(menuOpen == false){        
        $("#setting").show(1500);
        document.getElementById("chooseBack").value=document.body.style.background;
        document.getElementById("chooseFont").value=document.body.style.color;
        menuOpen = true;
    }
    else{
        
        menuOpen = false;
        $("#setting").hide(1500);
    }
}

function OpenSetting(){
    ShowMenu();
}

function ApriLettraVeloce(apri){
    document.getElementById("cronologia").style.display="none";
    if(apri){
        $("#home").hide(1500);
        $("#introduzione").hide(1500);
        $("#letturaVeloce").show(1500);
        $("#scrivi").hide(1500);
        momento = 2;
    }
    else{
        $("#home").show(1500);
        $("#letturaVeloce").hide(1500);
        $("#scrivi").hide(1500);
        $("#introduzione").hide(1500);
        momento = 1;
        /*
        document.getElementById("home").style.display="block";
        document.getElementById("letturaVeloce").style.display="none";
        document.getElementById("scrivi").style.display="none";
        */
    }
}

var isPlaying;
isPlaying= false;
var velocita = 500;
function PlayLetturaVeloce(){
    isPlaying = true;
    var arr = testo.split(' ');
    for(var j = 0; j < arr.length; j++){
        console.log(arr[j]);
    }
    Play(arr, 0, isPlaying);
}

function StopLetturaVeloce(){
    console.log(isPlaying);
    if(isPlaying)
    isPlaying = false;
}

function Play(s, i, play){
    setTimeout(function(){
        document.getElementById("lVeloce").innerHTML=s[i];
        i++;
        console.log(isPlaying);
        if(play == false){
            i = s.length;
            document.getElementById("lVeloce").innerHTML="";
        }
        if(i < s.length){                        
            Play(s, i, isPlaying);
        }
    }, velocita);
}

function CambiaVelocita(){
    var proxVel=document.getElementById("lblSpeed").value;
    if(proxVel % 1 == 0 && proxVel > 100){
        velocita = proxVel;
        document.getElementById("alert-cambio-velocita").innerHTML="velocità di scorrimento del testo cambiata con successo";
        document.getElementById("alert-cambio-velocita").style.display="block";
        setTimeout(() => {
            document.getElementById("alert-cambio-velocita").style.display="none";
        }, 1500);
    }
    else{//alert-cambio-velocita-danger
        document.getElementById("alert-cambio-velocita-danger").innerHTML="velocita di scorrimento troppo bassa";
        document.getElementById("alert-cambio-velocita-danger").style.display="block";
        setTimeout(() => {
            document.getElementById("alert-cambio-velocita-danger").style.display="none";
        }, 1500);
    }
}





function ShowCronologia(){
    $("#home").hide(1500);
    $("#introduzione").hide(1500);
    $("#scrivi").hide(1500);
    $("#letturaVeloce").hide(1500);
    $("#cronologia").show(1500);    
    if(document.getElementById("raccolta").innerHTML==""){
        alert("non c'è nessun elemento nella cronologia");
    }
    momento = 3;
}

function ChangeFont(v){
    document.body.style.fontFamily=v;
}

function ShowVelocitaLettura(){
    ShowMenu();
    document.getElementById("modVelocita").style.background = "yellow";
    setTimeout(function(){
        document.getElementById("modVelocita").style.background="#bbbbbb";
    }, 1000);
}

function Riinizia(){
    window.speechSynthesis.cancel()
}

function Pausa(){
    window.speechSynthesis.pause();
    document.getElementById("pausa").style.display="none";
    document.getElementById("riprendi").style.display="inline-block";
}

function Riprendi(){
    window.speechSynthesis.resume();
    document.getElementById("riprendi").style.display="none";
    document.getElementById("pausa").style.display="inline-block";
}

function ShowMediaPlayer(show){
    if(show){
        document.getElementById("gestoreAudio").style.display="block";
        document.getElementById("riinizia").style.display="inline-block";
        document.getElementById("pausa").style.display="inline-block";
        document.getElementById("riprendi").style.display="none";
    }
    else{
        document.getElementById("gestoreAudio").style.display="none";
    }
}


var toggleOpen = false;
document.getElementById("toggle-menu").addEventListener("click", function(){
    if(toggleOpen){
        $("#container").animate({marginTop: "70"}, 300);
        $("setting").animate({top : "70"}, 300);
        document.getElementById("setting").style.top="50px";
        toggleOpen = false;
    }
    else{
        $("#container").animate({marginTop: "250"}, 300);
        $("setting").animate({top : "250"}, 300);
        document.getElementById("setting").style.top="250px";
        toggleOpen = true;
    }
});

document.getElementById("backToTop").addEventListener("click", function(){
    scroll_to("container");
});

function ApriIntroduzione(){
    $("#home").hide(1500);    
    $("#scrivi").hide(1500);
    $("#letturaVeloce").hide(1500);
    $("#cronologia").hide(1500); 
    $("#introduzione").show(1500);
    momento = 3;
}

//SHOTCUT DA TASTIERA

var momento = 3;
var scorciatoieAttive = true;
//rappresenta in quale situazione si trova l'utente ai fine di attivare gli shortcut da tastiera
/*
sta leggendo = 0 *FIX:TODO
home lettura = 1 *inutile
lettura veloce = 2
altro = 3
non li legge = 4
*/
/*
legenda ASCII
76 = l
73 = i
80 = p
83 = s
77 = m => modifica testo
72 = H => torna alla home
86 = v => lettura veloce
67 = C => cronologia
*/



window.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 229 || momento == 4 || !scorciatoieAttive) {
      return;
    }
    if(window.event.keyCode == 76){
        Leggi();
    }
    if(window.event.keyCode == 73){
        OpenSetting();
    }
    if(window.event.keyCode == 77){
        ApriTesto();
    }
    if(window.event.keyCode == 72){
        ApriLettraVeloce(false);
    }
    if(window.event.keyCode == 86){
        ApriLettraVeloce(true);
    }
    if(window.event.keyCode == 67){
        ShowCronologia();
    }
    if(momento == 2){
        if(window.event.keyCode == 80){
            PlayLetturaVeloce()
        }
        if(window.event.keyCode == 83){
            StopLetturaVeloce()
        }
    }
});

function CambiaAttivazioneScorciatoie(){
    scorciatoieAttive = !scorciatoieAttive;
    if(scorciatoieAttive){
        document.getElementById("attivaScorciatoie").innerHTML="scorciatoie da tastiera attivate";
    }
    else{
        document.getElementById("attivaScorciatoie").innerHTML="scorciatoie da tastiera disattivate";
    }
}