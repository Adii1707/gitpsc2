let form = document.getElementById("form").addEventListener("submit", myfunc);


let id;
function myfunc(){

event.preventDefault();



if(id){
    clearTimeout(id);
}


 id = setTimeout(function () {
        alert(" Your order is accepted");
    },0);
  id = setTimeout(function(){
    alert(" Your order is being Prepared");
},1000);

id = setTimeout(function () {
    alert("Your order is being packed");
},8000);

id = setTimeout(function(){
alert(" Your order is out for delivery");
},10000);

id = setTimeout(function(){
    alert(" Order delivered");
    },12000);
    

}