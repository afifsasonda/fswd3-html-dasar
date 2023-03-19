//dasar dasar array
let fruit = [1,2,3,4,5,6,7];
console.log(fruit);

fruit[1] = 8;
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.push(7);
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.unshift(1);
console.log(fruit);

console.log(fruit.length);

//Array Iteration
let mahasiswa = ['Budi','Andi','Deni','Andika'];
mahasiswa.forEach(cetakMahasiswa);
function cetakMahasiswa(element) {
    console.log(element);
}