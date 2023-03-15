//code structure
console.log("Hello World");
console.log("Hello World"); alert("Hello World");

// Variabel
var nama = "Afif Dwi Sasonda";
let alamat = "Padang";
const umur = 20;
console.log('hallo saya ' +nama+ ', asal '+alamat+ ', umurku '+umur);

//Data Type
let number = 25; //Number
const bigInt = 123456789012345678901234567890n; //BigInt
const namaKu = "Afif Dwi Sasonda"; //String
console.log(namaKu);

let bool = true;
let isGreater = 10 > 5; //Boolean

let girlfriend = null; // Null

let name;
console.log('name'); //undefined

let symbol = Symbol('Afif');
console.log(symbol);
console.log(symbol.description); //Symbol

let karyawan = {
    nama: "Tomas",
    umur: 20,
    pekerjaan: "web developer",
    kawin: false,
    hobi: ["Sports","cooking"],
};
console.log(`Namanya ${karyawan.nama} dan umurnya ${karyawan.umur} tahun`); // Object

//Type Conversion
let text ="hallo";
alert(typeof text); // string

let str ="123";
alert(typeof str); // string
let num = Number(str);
alert(typeof num); //number

alert( Boolean(1)); //true
alert(Boolean(0)); //false
alert(Boolean("Hello")); //true
alert(Boolean("")); //false

//Operator
let a = 10;
let b = 3
//1. operator aritmatika
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//2. operator penugasan
a+=5;
b -= 1;
console.log(a);
console.log(b);
a*=3;
b/=3;
console.log(a);
console.log(b);

//3. operator relasi atau perbandingan
console.log(a == b); //sama
console.log(a > b); //lebih besar
console.log(a < b); // lebih kecil
console.log(a != b); // a bukan b;

//4. operator logika
a = true;
b = false;
console.log(a && b); //logika AND
console.log(a || b); //Logika OR
console.log(!a); //Negasi a

//5. operator bitwise
a = 00111100;
b = 00001101;
console.log(a & b); //AND
console.log(a | b); //OR
console.log(a ^ b); //XOR
console.log(~a); //negasi

//6. operator ternary
a = 1;
b = 1;
console.log(a == b ? "yes" : "no");

//PopUp Box: Alert, prompt, Confirm
// 1. Alert
alert('Selamat Datang di Arkatama');

// 2. Promp
let response = prompt("Apakah Kamu mau nonton akhir pekan ini?");
alert("Jawaban adalah "+ response);

// 3. Confirm
let respon = confirm("Mau dinner ga malam ni?");
alert("jawabannya : "+ respon);

//Conditional
let jumlah = prompt("1 + 1 = ");
if(jumlah == 2){
    alert("Benar");
}
else if(jumlah < 2){
    alert("terlalu kecil");
}
else{
    alert("salah");
}

//switch
let color = "red";
switch(color){
    case "red":
        alert("I Love Red");
        break;
    case "blue":
        alert("I Love Blue");
        break;
    default:
        alert("I don't know color it is!!");
        break;
}

// Looping
// 1. For
for (let i = 0; i < 5; i++) {
    console.log(`Iterasi ke ${i}`);
}

// 2. Do While
let i = 0;
do{
    console.log(`Iterasi ke ${i}`);
    i+=1;
} while(i<5);

// 3. While
let p = 0;
while(i<5){
    console.log(`Iterasi Ke ${i}`);
    i++;
}

// 4. Break
for (let i = 0; i < 5; i++) {
    if(i==3)
    {
        break;
    }
    console.log(`Iterasi Ke ${i}`);
}

// 5. Continue
for (let i = 0; i < 5; i++) {
    if(i==3)
    {
        continue;
    }
    console.log(`Iterasi Ke ${i}`);
}
//Function
function salam(){
    console.log("Hello world");
}
salam();

let test = function(){
    console.log("Hallo");
}
test();

var iniTest = () => {
    console.log("hallo gess");
}
var iniTest2 = () => console.log("P");

iniTest();
iniTest2();