const btn1=document.getElementById("btn-1");
const btn2=document.getElementById("btn-2");
const display=document.getElementById("displayer");
const icon1=document.createElement('div');
const icon2=document.createElement('div');
const p=document.getElementById("who");
let colorp1=document.getElementById("player1");
let colorp2=document.getElementById("player2");
const newg=document.getElementById("new");
let play1=0;
let play2=0;
function colorchanger(){
icon1.style.backgroundColor=colorp1.value;
icon2.style.backgroundColor=colorp2.value;
btn1.style.backgroundColor=colorp1.value;
btn2.style.backgroundColor=colorp2.value;
icon1.textContent="1";
icon2.textContent="2";
btn1.disabled=false;
btn2.disabled=true;
let k=document.getElementById("100");
document.getElementById("0").appendChild(icon1);
document.getElementById("0").appendChild(icon2);
if(k.contains(icon1)){
    k.removeChild(icon1);
}
if(k.contains(icon2)){
    k.removeChild(icon2);
}
display.style.backgroundImage="none";
display.textContent=""; 
p.textContent="";
newg.textContent=" Start New Game";
play1=0;
play2=0;
}
icon1.classList.add("i");
icon1.id="i1";
icon2.id="i2";
icon2.classList.add("i");

let ladder={
    4:25, 21:39,26:67,59:80,71: 89,43:76
};
let snake={
    30:7,56:19,47:13,98:55,82:42,92:75,73:51
};
const lad=Object.keys(ladder).map(Number);
const snk=Object.keys(snake).map(Number);
function rolldice(player){
    const num=Math.floor(Math.random() *6)+1;
    if(player==="p1"){
        if(num===1){
            display.style.backgroundImage= "url('dice1.png')";
        }
        else if(num===2){
            display.style.backgroundImage="url('dice2.png')";
        }else if(num===3){
            display.style.backgroundImage="url('dice3.png')";
        }
        else if(num===4){
            display.style.backgroundImage="url('dice4.png')";
        }
        else if(num===5){
            display.style.backgroundImage="url('dice5.png')";
        }
        else if(num===6){
            display.style.backgroundImage="url('dice6.png')";
        }
        p.textContent="PLAYER 1"; 
        
        p.style.color=colorp1.value;

         let x=play1;
        if((play1+num)<100){
            play1+=num;
            document.getElementById(x).removeChild(icon1);
            document.getElementById(play1).appendChild(icon1);
            
        }
        else if((play1+num)===100){
            display.style.backgroundImage="none";
            display.textContent="🎊 Player 1 WINS🎊";
            display.style.fontSize="20px";
            display.style.border="none";
            display.style.textAlign="center";
            display.style.alignContent="center";
            p.textContent="";
            document.getElementById(x).removeChild(icon1);
            document.getElementById("100").appendChild(icon1);
            btn1.disabled=true;
            btn2.disabled=true; 
            return;
        }
        if (ladder[play1]) {
            document.getElementById(play1).removeChild(icon1);
            play1 = ladder[play1];
            document.getElementById(play1).appendChild(icon1);
        }
        if (snake[play1]) {
            document.getElementById(play1).removeChild(icon1);
            play1 = snake[play1];
            document.getElementById(play1).appendChild(icon1);
        }
        btn1.disabled=true;
        btn2.disabled=false;

    }
    if(player==="p2"){
         if(num===1){
            display.style.backgroundImage= "url('dice1.png')";
        }
        else if(num===2){
            display.style.backgroundImage="url('dice2.png')";
        }else if(num===3){
            display.style.backgroundImage="url('dice3.png')";
        }
        else if(num===4){
            display.style.backgroundImage="url('dice4.png')";
        }
        else if(num===5){
            display.style.backgroundImage="url('dice5.png')";
        }
        else if(num===6){
            display.style.backgroundImage="url('dice6.png')";
        }
        p.textContent="PLAYER 2";
        p.style.color=colorp2.value;


        let y=play2;
        if((play2+num)<100){
            play2+=num;
            document.getElementById(y).removeChild(icon2);
            document.getElementById(play2).appendChild(icon2);
            
        }
        else if((play2+num)===100){
            display.style.backgroundImage="none";
            display.textContent="🎊 Player 2 WINS🎊";
            display.style.fontSize="20px";
            display.style.border="none";
            display.style.textAlign="center";
            display.style.alignContent="center";
            p.textContent="";
            document.getElementById(y).removeChild(icon2);
            document.getElementById("100").appendChild(icon2);
            btn2.disabled=true;
            btn1.disabled=true;
            return;
        }
        if (ladder[play2]) {
    document.getElementById(play2).removeChild(icon2);
    play2 = ladder[play2];
    document.getElementById(play2).appendChild(icon2);
}
if (snake[play2]) {
    document.getElementById(play2).removeChild(icon2);
    play2 = snake[play2];
    document.getElementById(play2).appendChild(icon2);
}
        btn2.disabled=true;
        btn1.disabled=false;

    }
    display.style.backgroundSize="cover";
    display.style.backgroundPosition="center";

}

