let komputer = Math.floor(Math.random()*3);
let player = prompt("Pilih Rock, Paper, Scissor");
const array = ["rock","paper","scissor"];
komputer = array[komputer];

if(player == "rock" && komputer == "paper"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Kalah");
}
if(player == "rock" && komputer == "scissor"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Menang");
}
if(player == "rock" && komputer == "rock"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Imbang");
}
if(player == "paper" && komputer == "rock"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Menang");
}
if(player == "paper" && komputer == "paper"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Imbang");
}
if(player == "paper" && komputer == "scissor"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Kalah");
}
if(player == "scissor" && komputer == "rock"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Kalah");
}
if(player == "scissor" && komputer == "paper"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Menang");
}
if(player == "scissor" && komputer == "scissor"){
    alert("kamu memilih : "+ player + "\nKomputer memilih : " +komputer + "\nHasil : Imbang");
    location.reload();
}