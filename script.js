const name1 = document.getElementById("gamer1")
const name2 = document.getElementById("gamer2")
const start = document.querySelector(".start")
const btn_game = document.querySelectorAll(".btn-game")
let cont=true
let arr=[]
let arr1=[]
const p = document.createElement("p")
name1.focus()
document.getElementById("reniciar").addEventListener("click",function(){
  window.location.reload()
  name1.focus()
})

start.addEventListener("click",function(){
  name1.disabled=true
  name2.disabled=true
  start.disabled=true
  start.classList.add('active')
  console.log(start)
  btn_game.forEach(element=>{
    
    element.disabled=false
  })
  
  p.innerText = name1.value
  document.getElementById("SECTION_OUTPUT").append(p)

})

btn_game.forEach(element => {
  console.log(element)
  element.addEventListener("click",function(ev){
    if(cont){
      let c=0
      c++
      
      element.innerText="X"
      element.dataset.game = "X"
      element.disabled="true"
      cont=false
      p.innerText=name2.value
      arr.push(element.value)
      if(arr.length>=3){
          let a1 = arr.filter((array)=> array == 0 ||array == 1 || array == 2)
          let a2 = arr.filter((array)=> array == 3 ||array == 4 || array == 5)
          let a3 = arr.filter((array)=> array == 6 ||array == 7 || array == 8)
          let a4 = arr.filter((array)=> array == 0 ||array == 3 || array == 6)
          let a5 = arr.filter((array)=> array == 1 ||array == 4 || array == 7)
          let a6 = arr.filter((array)=> array == 2 ||array == 5 || array == 8)
          let a7 = arr.filter((array)=> array == 0 ||array == 4 || array == 8)
          let a8 = arr.filter((array)=> array == 2 ||array == 4 || array == 6)
          
          if(a1.length==3){console.log(a1);winsGamer(a1)}
          if(a2.length==3){console.log(a2);winsGamer(a2)}
          if(a3.length==3){console.log(a3);winsGamer(a3)}
          if(a4.length==3){console.log(a4);winsGamer(a4)}
          if(a5.length==3){console.log(a5);winsGamer(a5)}
          if(a6.length==3){console.log(a6);winsGamer(a6)}
          if(a7.length==3){console.log(a7);winsGamer(a7)}
          if(a8.length==3){console.log(a8);winsGamer(a8)} 
      }
    }else{
      element.innerText="O"
      const j=element.dataset.game = "O"
      
      element.disabled="true"
      cont=true    
      p.innerText=name1.value
      arr1.push(element.value)
       if(arr1.length>=3){
          let o1 = arr1.filter((array)=> array == 0 ||array == 1 || array == 2)
          let o2 = arr1.filter((array)=> array == 3 ||array == 4 || array == 5)
          let o3 = arr1.filter((array)=> array == 6 ||array == 7 || array == 8)
          let o4 = arr1.filter((array)=> array == 0 ||array == 3 || array == 6)
          let o5 = arr1.filter((array)=> array == 1 ||array == 4 || array == 7)
          let o6 = arr1.filter((array)=> array == 2 ||array == 5 || array == 8)
          let o7 = arr1.filter((array)=> array == 0 ||array == 4 || array == 8)
          let o8 = arr1.filter((array)=> array == 2 ||array == 4 || array == 6)

          if(o1.length==3){console.log(o1);winsGamer(o1,j)}
          if(o2.length==3){console.log(o2);winsGamer(o2,j)}
          if(o3.length==3){console.log(o3);winsGamer(o3,j)}
          if(o4.length==3){console.log(o4);winsGamer(o4,j)}
          if(o5.length==3){console.log(o5);winsGamer(o5,j)}
          if(o6.length==3){console.log(o6);winsGamer(o6,j)}
          if(o7.length==3){console.log(o7);winsGamer(o7,j)}
          if(o8.length==3){console.log(o8);winsGamer(o8,j)}
    }
  }});
});

function winsGamer(array,j) {
  array.forEach(ev=>{
    btn_game.forEach(element=>{
        element.disabled=true
        if(ev === element.value){
          element.classList.add("winner")
          
          if(j=="O"){
            p.innerText = "O vencedor é o JOGADOR 2 !!"
            p.classList.add("big")
          }
          else{
            p.innerText = "O vencedor é o JOGADOR 1 !!" 
            p.classList.add("big")
          }        
        }

      });
    });
   
  }
  



/*btn_game.forEach(element => {
  element.addEventListener("click",function(ev){
    element.innerText="O"
    element.disabled="true"
  });
});*/

// 0 1 2 || 3 4 5 || 6 7 8 || 0 3 6 
// 1 4 7 || 2 5 8 || 0 4 8 || 2 4 6