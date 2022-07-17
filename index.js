const { getModulesPluginNames } = require("@babel/preset-env");

function writeCards(names){
    let newArray = [];
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}
function countDown(num){
    for (let i = num; i >= 0; i--){
        console.log(i);
    }
}