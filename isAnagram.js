function isa(a,b){
if(a.split("").sort().join("")===b.split("").sort().join("")){
    return true
}else{
    return false;
}
}

console.log(isa('listen','silant'));