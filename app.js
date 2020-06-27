// var a = 0;
// while(a<20){
//     document.write(a + "<br>");
//     a++;
// }

// var b = 0;
// do{
//     document.write(b + "<br>");
//     b++;
// }
// while(b<10)


// function a(){
//     alert("hello  world");
// }



// function getname(){
//     var name = document.getElementById("name");
//     alert(name.value);

//     name.value = "";
// }


// function setName(){
//      var name = document.getElementById("name");
//     name.value = "Hammad";
//     var para = document.getElementById("para");
//     para.innerHTML  = "hello whatsapp";
// }


// setName()


function getnumber(num){
    var result = document.getElementById("result");
     
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
     
    result.value = "" ;
}

function getResult(){
    var result = document.getElementById("result");

    result.value = eval(result.value)
}