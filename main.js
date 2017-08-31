var ops = ["nine", "eight", "seven", "six",
    "five", "four", "three", "two", "one",
    "division", "plus", "minus", "zero",
    "point", "multiply", "equal"];
function hook(target){
    return document.getElementById(target);
}
//event listeners
for(var i=0; i<16;i++){
    hook(ops[i]).addEventListener("click",()=> {update(ops[i])},false);
}
function update(targetKey){
    console.log(targetKey);
}