for (let i = 1; i <= 5; i++) {
    console.log("for loop")
}
let k=0;
while(k<5){
    console.log("while loop");
    k++;
}

for(let val of "this is string"){
    console.log(val)
}

const student={
    fullName:"pritam",
    age:25,
    cgpa:8.8,
    isPass:true
};

for(let k in student){
    console.log(k)
    console.log(student[k])
}

let output = `this is temlate literal name  ${student.fullName} , age ${student.age}`
console.log(output)