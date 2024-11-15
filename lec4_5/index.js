

function functionName(){
    console.log("this is a function")
}

functionName()

function myFunction(msg){
    console.log(msg)
}
myFunction("this myFunction called")

myFunction("this myFunction called 2ed time")

function multi(a,b){
    return a*b;
}

console.log(multi(3,4))


const multiArrow=(a,b)=>{
    return a*b;
}

console.log(multiArrow(7,8))


let arr=[4,5,6]

arr.forEach((val)=>{
    console.log(val)
})


let arr2=["raju","baju","kaju"]

arr2.forEach((val)=>{
    console.log(val.toUpperCase())
})

let arr3=[4,5,6]

arr3.forEach((val)=>{
    console.log(val*val)
})

let calSquare=(v)=>{
    console.log(v*v);

}
arr3.forEach(calSquare) 

let arr4=arr3.map(((val)=>{
    return val*val
}))

console.log(arr4)

let arr5=arr3.filter( (val)=>{
    if(val%2==0){
        return val
    }
}
)
console.log(arr5)


 