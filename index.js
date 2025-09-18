
import fs from "fs";

let ordentxt = fs.readFileSync("orden.txt", "utf-8")


let partes = ordentxt.split("\r\n")
console.log(partes)
//let orden = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];
let texto =  "";

for (let i = 0; i < partes.length; i++){
    texto = fs.readFileSync("Cuento/parte" + partes[i] + ".txt", "utf-8");
    console.log(texto);
}
fs.writeFileSync("La autopista del sur.txt", texto)
 