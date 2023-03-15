let komputer = Math.floor(Math.random()*3);
let player = prompt("Pilih Rock, Paper, Scissor");
const array = ["rock","paper","scissor"];
komputer = array[komputer];

if(player == "rock" && komputer == "paper"){
    alert("Komputer memilih : " +komputer);
    alert("kamu kalah");
}
if(player == "rock" && komputer == "scissor"){
    alert("Komputer memilih : " +komputer);
    alert("kamu menang");
}
if(player == "rock" && komputer == "rock"){
    alert("Komputer memilih : " +komputer);
    alert("Kamu Imbang");
}
if(player == "paper" && komputer == "rock"){
    alert("Komputer memilih : " +komputer);
    alert("kamu menang");
}
if(player == "paper" && komputer == "paper"){
    alert("Komputer memilih : " +komputer);
    alert("kamu Imbang");
}
if(player == "paper" && komputer == "scissor"){
    alert("Komputer memilih : " +komputer);
    alert("kamu kalah");
}
if(player == "scissor" && komputer == "rock"){
    alert("Komputer memilih : " +komputer);
    alert("kamu kalah");
}
if(player == "scissor" && komputer == "paper"){
    alert("Komputer memilih : " +komputer);
    alert("kamu menang");
}
if(player == "scissor" && komputer == "scissor"){
    alert("Komputer memilih : " +komputer);
    alert("kamu Imang");
    location.reload();
}