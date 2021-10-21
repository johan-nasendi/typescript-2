// Interger
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Unknown"] = 2] = "Unknown";
})(Gender || (Gender = {}));
var kelaminJenis = Gender.Male;
console.log(kelaminJenis);
// String
var Category;
(function (Category) {
    Category["Pria"] = "Pria";
    Category["Wanita"] = "Wanita";
})(Category || (Category = {}));
var jenisKelamin = Category.Pria;
console.log(Category);
