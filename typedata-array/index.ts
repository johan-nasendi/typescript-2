// Array
let names: string[] = ["Johan","Maurits","Nasendi"];
let numbers: Array<number> = [1,2,3,4,5];

// mengubah Array
names[0] = "Jimmy";

console.log(names[0]);
console.log(numbers[1]);

// Tuple
let mahasiswa: [string,string,number] = ["191183","Johan",90];
console.log(mahasiswa[2]) 

// mengubah Tuple
mahasiswa[2] = 80;

// + Data di Array
let namesLa: Array<string> = [];
namesLa.push("Johan");
namesLa.push("M");
namesLa.push("Nasendi");
console.log(namesLa);

// Delete Array
delete namesLa[1];
console.log(namesLa);

console.log(mahasiswa);
delete mahasiswa[0];
console.log(mahasiswa)