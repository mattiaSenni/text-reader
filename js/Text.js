var Text = {
    testo : "",
    testoPrec : "",
    SpeechRecognition : "",
    recognition : "",
    velocitaLettura : 1,
    speech : "",
    isReading: false,
    cronologiaCompleta : new Array(),
    getId : 0,

    Inizializza(){
        try {    
            this.testo = "";
            this.testoPrec = "";
            SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;    
            recognition = new SpeechRecognition();
            velocitaLettura = 1;
            speech = new SpeechSynthesisUtterance();
            isReading = false;
            cronologiaCompleta = new Array();
            getId = 0;
        }  
        catch(e) {    
            console.error(e);   
        }
    },
    
    readOutLoud(message){
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
            //document.getElementById("tRiproduci").innerHTML="leggi il testo";//mini-
            document.getElementById("playIcon").innerHTML="<path  d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/>";
        };  
        }catch(e){
            alert("audio non riproducibile");
        }
    },

    Leggi(){
        if(!isReading){
            this.readOutLoud(this.testo);
            document.getElementById("riproduci").innerHTML="ferma la lettura";
            //document.getElementById("tRiproduci").innerHTML="ferma la lettura"; //mini-
            document.getElementById("playIcon").innerHTML="<path d='M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z'/>";
            isReading = true;
        }
        else{
            window.speechSynthesis.cancel();
            isReading = false;
            document.getElementById("riproduci").innerHTML="leggi il testo";
            //document.getElementById("tRiproduci").innerHTML="leggi il testo"; //mini-
            document.getElementById("playIcon").innerHTML="<path  d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/>";
        }
    },

    AggiungiTesto(){
        if(this.testo != this.testoPrec && this.testo != ". "){
            var preCron = "";
            preCron += document.getElementById("raccolta").innerHTML;
            //faccio il testo html per l'elemento della cronologia
            var cron = "<div id='" + this.getId + "a'>" + "<div class='row'><div class='col-3 col-lg-1'><button class='btn btn-info width-max margin-bottom new-btn' onclick='readCron(" + this.getId + ")' title='riproduci'>"+codeEarBuds()+"</button><br><button class='btn btn-danger width-max new-btn' onclick='delCron(" +this.getId + ")' title='cancella'>"+ codeTrash()+"</button></div><div class='col-9 col-lg-11' id='" + this.getId + "testo'>" + this.testo +"</div></div>" + "<hr>" + "</div>" + preCron;
            this.getId++;
            cronologiaCompleta[this.getId] = this.testo;
            document.getElementById("raccolta").innerHTML = cron;
            this.testoPrec = this.testo;
            document.getElementById("alert-testo").innerHTML="testo copiato con successo, testo aggiungo alla cronologia";
        }
        else{        
            if(this.testo == ". "){            
                document.getElementById("alert-testo").innerHTML="testo cancellato";
            }
            else{
                document.getElementById("alert-testo").innerHTML="testo copiato con successo";
            }
        }
    },

    readCron (r){
        this.testo = document.getElementById(r + "testo").innerHTML;  
        document.getElementById("scriviTesto").value = this.testo;
        document.getElementById("testo").innerHTML = this.testo;
        Leggi();
    },

    delCron(t){
        document.getElementById(t + "a").innerHTML="";
    },

    GetString (stringa){
        this.MakeTesto(stringa);
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
    },

    MakeTesto(stringa){
        this.testo="";
        var pre = stringa.split("--");
        for(var i = 0; i < pre.length; i++){
            this.testo += pre[i]+ ". ";
        }
    }
};