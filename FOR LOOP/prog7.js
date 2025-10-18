// Reverse a string.

let str = "naivil";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Reversed:", reversed);