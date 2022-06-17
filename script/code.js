// Minutes = (Seconds / 60);
// Seconds = (Minutes * 60);

// Connnects to btn in html using btn id
const btnConvert = document.getElementById('btn');
// Adds a function to the button when its clicked
btnConvert.addEventListener('click', (minutes) => {
    // minutes is a parameter in the function which is why its not declared with let;
    // finds the value in the minutes input
    minutes = document.getElementById('Minutes').value;

    // connects to input with Seconds ID 
    let seconds = document.getElementById('Seconds');
    // places the answer in the seconds input box
    seconds.value = minutes * 60;
})

// function minToSec(Minutes, Seconds){
//     return {
//         Mintues: ()=> {
//             return Seconds / 60;
//         },
//         Seconds: ()=> {
//             return Minutes * 60;
//         }    
//     }
//     let result = document.querySelector("#btn");
// }