// Simple Click
document.addEventListener('DOMContentLoaded', function(){
    var click = document.getElementById('click');
    var status = "seq";
    click.onclick = function(){
     if(status == "seq"){
        click.classList.toggle('down');
        click.classList.remove('up');
        status = "seq_2";
     }
     else if(status == "seq_2"){
        click.classList.remove('down');
        click.classList.toggle('up');
        status = "seq";
     }
    } 
},false)