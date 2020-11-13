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




window.addEventListener("load", function(){
    
    document.body.style.backgroundImage = "background-image: url('../img/cityBlueBackground.jpg');"
    document.getElementById("home").style.display="none";
    document.getElementById("home").style,display="none";
    document.getElementById("setting").style.display="none";
    document.getElementById("scrivi").style.display="none";
    document.getElementById("letturaVeloce").style.display="none";
    document.getElementById("cronologia").style.display="none";
    document.getElementById("introduzione").style.display="none";
    setTimeout(() => {
		MakeHome('#021032', '#ffffff');
        try{
            $("#simbolo").hide(1500);
            $("#introduzione").show(1500);
            document.getElementById("introduzione-sfondo").classList.add("introduzione-sfondo");
        }catch(e){
            this.alert("errore nel caricamento delle risorse, si prega di ricaricare la pagina");
        }
    }, 1500);
    
    
        

    
});

var text = Text;
text.Inizializza();


var isReading = false;
function Leggi(){
    text.Leggi();
}


function ChangeVelocitaLettura(n){
    text.velocitaLettura = n;
}

function ChangeLinguaLettura(v){
    text.language = v;
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


function ChiudiTesto(){       
    document.getElementById("testo").innerHTML= text.GetString(document.getElementById("scriviTesto").value)
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

    text.AggiungiTesto();
    
    document.getElementById("alert-testo").classList.remove("display-none");
    document.getElementById("alert-testo").classList.add("display");
    setTimeout(function(){
        document.getElementById("alert-testo").classList.add("display-none");
        document.getElementById("alert-testo").classList.remove("display");
    },2000);
}

function ChiudiTestoFile(){
    document.getElementById("testo").innerHTML= text.GetString(document.getElementById("contenutoFile").value)
    
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

    text.AggiungiTesto();
    
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
    text.readCron(r)
}

function copfffffyCron(v){
    console.log("sarà presto disponibile");
}

function delCron(t){
    text.delCron(t);
}




function MakeHome(back, write){
    document.body.style.background=back;
    document.body.style.color=write;
    document.getElementById("icon").style.color=write + "!important";
    document.getElementById("nav-grande").style.color=write + "!important";
    document.getElementById("nav-small").style.color=write + "!important";
    document.getElementById("chooseBack").value= "#123456";
    document.getElementById("chooseFont").value = write;
    //document.getElementById("botton-intro").style.borderColor=back;
    document.getElementsByClassName("nav-link").color = write;
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
    document.getElementById("scriviTesto").style.fontSize = v + "px";
}

function InvioSetting(){
    console.log(document.getElementById("chooseBack").value + ", " +document.getElementById("chooseFont").value);
    MakeHome(document.getElementById("chooseBack").value, document.getElementById("chooseFont").value)                
}

var menuOpen = false;
function ShowMenu(){
    if(menuOpen == false){        
        $("#setting").show(1500);
        //document.getElementById("chooseBack").value=document.body.style.background;
        //document.getElementById("chooseFont").value=document.body.style.color;
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
    var arr = text.testo.split(' ');
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
      
    
    if(document.getElementById("raccolta").innerHTML==""){
        alert("non c'è nessun elemento nella cronologia");
    }
    else{
        $("#home").hide(1500);
        $("#introduzione").hide(1500);
        $("#scrivi").hide(1500);
        $("#letturaVeloce").hide(1500);
        $("#cronologia").show(1500);  
        momento = 3;
    }
   
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

//formatta text editor
function ChangeSizeEditor(n){
    document.getElementById("scriviTesto").style.fontSize = n + "px";
}

function OrientamentoEditor(val){
    document.getElementById("scriviTesto").style.textAlign = val;
}

function ChangeFontEditor(val){
    document.getElementById("scriviTesto").style.fontFamily= val;
}

function InvioSettingEditor(){
    document.getElementById("scriviTesto").style.backgroundColor = document.getElementById("chooseBackEditor").value;
    document.getElementById("scriviTesto").style.color = document.getElementById("chooseFontEditor").value;
}

var formattazioneDefault = true;
function BucketIcon(){
    return '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bucket-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
    '<path fill-rule="evenodd" d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0h8.945a4.5 4.5 0 0 0-8.945 0z"/>'+
    '</svg>'
}
function FormattazionePredefinitaEditor(){
    if(formattazioneDefault)
    {
        document.getElementById("scriviTesto").style.backgroundColor = "#021032";
        document.getElementById("scriviTesto").style.color = "#ffffff";
        document.getElementById("scriviTesto").style.fontSize = document.body.style.fontSize;
        document.getElementById("formattazioneAutoEditor").innerHTML = BucketIcon() + "formattazione predefinita";
    }
    else
    {
        document.getElementById("scriviTesto").style.backgroundColor = "#ffffff";
        document.getElementById("scriviTesto").style.color = "#000000";
        document.getElementById("scriviTesto").style.fontSize = document.body.style.fontSize;
        document.getElementById("formattazioneAutoEditor").innerHTML = BucketIcon() + "formattazione text-reader";
    }
    formattazioneDefault = !formattazioneDefault;
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