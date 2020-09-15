//SUM Function:
  var btns=document.getElementsByClassName("btn-secondary");
  for(var i=0;i<btns.length;i++){
    var btn=btns[i];
    var sum=0;
 
    btn.addEventListener("click",function(event){
     var btnclicked=event.target;
     var priceElement=btnclicked.nextElementSibling;
     var price=parseInt(priceElement.innerText);
     sum=sum+price;
     alert(" Votre article a bien été ajouté au panier.")
    })

}
//Displaying function SUM value:
  var panier=document.getElementById("panier");
  panier.addEventListener("click",function(){
  var total=document.getElementById("total");
  total.innerHTML=sum;
})














