document.querySelector("#send").addEventListener("click", function () {
    const word = document.querySelector("#word").value;
    const out = document.querySelector(".output1");
    if (checkPalindrom(word)) {
        out.innerHTML = "è palindromo";
    }else{
        out.innerHTML = "non è palindromo";
    }
});

document.querySelector(".bottone").addEventListener("click", function () {
    document.querySelector(".inputs").innerHTML = `<input type="number" placeholder="inserisci un numero" max="5" min="1">
    <input type="submit" id="btn-2">`;
    document.querySelector("#btn-2").addEventListener("click", function () {
        const pcNumber = Math.floor(Math.random() * 5) + 1;
        const evenOdd = document.querySelector(".bottone").value;
        const myNumber = document.querySelector("#number");
        document.querySelector(".computer-number").innerHTML = "Il pc ha scelto il numero: "+pcNumber;
        const sum = pcNumber + myNumber;
        if (evenOdd == "pari") {
            if (sum % 2 == 0) {
                document.querySelector(".output2").innerHTML = "Hai vinto";
            }else{
                document.querySelector(".output2").innerHTML = "Hai perso";
            }
        }else{
            if (sum % 2 == 0) {
                document.querySelector(".output2").innerHTML = "Hai perso";
            }else{
                document.querySelector(".output2").innerHTML = "Hai vinto";
            }
        }
    });
});
// document.querySelector("#btn-2").addEventListener("click", function () {
//     alert("ciao");
//     const pcNumber = Math.floor(Math.random() * 5) + 1;
//     const evenOdd = document.querySelector(".bottone").value;
//     const myNumber = document.querySelector("#number");
//     document.querySelector(".computer-number").innerHTML = "Il pc ha scelto il numero: "+pcNumber;
//     const sum = pcNumber + myNumber;
//     if (evenOdd == pari) {
//         if (sum % 2 == 0) {
//             document.querySelector(".output2").innerHTML = "pari";
//         }else{
//             document.querySelector(".output2").innerHTML = "dispari";
//         }
//     }
// });

function checkPalindrom(w) {
    let isPalindrom = true;
    for (let i = 0; i < w.length && isPalindrom; i++) {
        if (w[i] != w[w.length - i - 1]) {
            isPalindrom = false
        }
    }
    return isPalindrom;
}