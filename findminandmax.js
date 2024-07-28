function findmax(arr){
    return Math.max(...arr) 
}
const inputarray = [1,2,3,4,5,6,7,8,9,10,11,58,89,54]
const maxfind = findmax(inputarray)
console.log("the max is: "+maxfind)


function findmin(arr){
    return Math.min(...arr) 
}
const inputarraym = [1,2,3,4,5,6,7,8,9,10,11,58,89,54]
const minfind = findmin(inputarraym)
console.log("the min is: "+minfind)