let fileReader = new FileReader();
fileReader.onload = function(event) {
    document.getElementById("scriviTesto").value= fileReader.result;
};
document.getElementById("file").onchange = function(event) {
    fileReader.readAsText(event.target.files[0]);
};