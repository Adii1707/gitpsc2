// Add the coffee to local storage with key "coffee"
let bucketData = JSON.parse(localStorage.getItem("coffee")) || [];
console.log(bucketData);
 
   async function getdata()
   {
    let menu = document.getElementById("menu");

let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

let res = await fetch(url);
let Data = await res.json();

let newData = Data.menu.data;
console.log(newData);
  // return Data.menu;
      append(newData)
   }  
    getdata() 

   function append(newData){

   // Data =  await getdata();

       newData.forEach(function(el){
        
       let div = document.createElement("div");
       
        let img = document.createElement("img");
       img.src = el.image;
        
         let p = document.createElement("p");
        p.innerText = el.title;
         
        let p1 = document.createElement("p");
       p1.innerText = el.price;

       let btn = document.createElement("button");
       btn.innerText = "add to bucket"
       btn.addEventListener("click", function(){
             addToBucket(el);
       });

       let menu = document.getElementById("menu");
       
        div.append(img,p,p1,btn);
       
       menu.append(div);
       });
  
   
      }
     append();
     
     function addToBucket(el){
         
    bucketData.push(el);
    localStorage.setItem("coffee", JSON.stringify(bucketData));     

     }
