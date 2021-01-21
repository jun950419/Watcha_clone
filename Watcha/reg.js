

function checkAll(){
    if(document.getElementById("all").checked==true){
        for(i=0; i<6; i++)
        document.getElementsByName("asd")[i].checked=1;
    }

    if (document.getElementById("all").checked==false){
        for(i=0; i<6; i++) document.getElementsByName("asd")[i].checked=0;
    }
}