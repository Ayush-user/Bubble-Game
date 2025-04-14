let timer=60;
let score=0;
let hitrn=0;


// just a comment to check the commit
function incScore() {
    score+=10;
    document.querySelector("#incscore").textContent=score;
}

//No such issues working fine
  
function makeBubble() {
let clutter="";
for(let i=0;i<168;i++) {
    let rn=Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${rn}</div>`
}


document.querySelector("#pbot").innerHTML=clutter;
}

function getNewHit() {
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}


function runTimer() {
    let timerint=setInterval(function(){
        if(timer>0) {
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbot").innerHTML=`<h1>Game Over!</h1>`;
        }
    },1000)
   
}

document.querySelector("#pbot").
addEventListener("click",function(dets){
    let clickedNum=(Number(dets.target.textContent));
    if(clickedNum===hitrn) {
        incScore();
        makeBubble();
        getNewHit();        
    }
    
})


runTimer();
makeBubble();
getNewHit();