function initiate(){
  databox=document.getElementById('databox');
  var myfiles=document.getElementById('myfiles');
  myfiles.addEventListener('change', process, false);
}
function process(e){
  var files=e.target.files;
  var file=files[0];
  var reader=new FileReader();
  reader.onload=show;
  reader.readAsText(file);
}
function show(e){
  var result=e.target.result;
  databox.innerText=result;
}
window.addEventListener('load', initiate, false);