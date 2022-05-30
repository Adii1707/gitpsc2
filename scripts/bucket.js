// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketData = JSON.parse(localStorage.getItem("coffee")) || [];

   function append(){
 
     bucketData.map(function(el,index){
  
      let div = document.createElement("div");
       
       let img = document.createElement("img");
      img.src = el.image;
       
        let p = document.createElement("p");
       p.innerText = el.title;
        
       let p1 = document.createElement("p");
      p1.innerText = el.price;

      let btn = document.createElement("button");
      btn.innerText = "remove"
      btn.addEventListener("click", function(){
            removeD(el,index);
      })

      let item = document.getElementById("item");
      
       div.append(img,p,p1,btn);
      
      item.append(div);

     });
     

   }
   append();

   function removeD(_el, index){

      bucketData.splice(1, index);
      window.location.reload();


   };