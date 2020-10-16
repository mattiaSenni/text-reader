let fileReader = new FileReader();
fileReader.onload = function(event) {
    document.getElementById("contenutoFile").value= fileReader.result;
};
document.getElementById("file").onchange = function(event) {
    fileReader.readAsText(event.target.files[0]);
    document.getElementById("contenutoFile").value= fileReader.result;
};