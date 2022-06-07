var currentNumberWrapper = document.getElementById('count');
var count = 0;

function increment(){
   count = count + 1;
   currentNumberWrapper.innerHTML = count
   var btninc = document.getElementById("incrementbtn");
   if (count >= 10){
     btninc.disabled = true;
   }else{
     btninc.disabled = false;
   }
}

function decrement(){
   count = count - 1;
   currentNumberWrapper.innerHTML = count;
   var btndec = document.getElementById("decrementbtn");
   if (count <= 0){
     btndec.disabled = true;
   }else{
     btndec.disabled = false;
   }

}

//cria um event listener que escuta mudanças no input
