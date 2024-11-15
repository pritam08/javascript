console.log("hello world");
const student={
    fullName:"pritam",
    age:25,
    cgpa:8.8,
    isPass:true
};
console.log(student);
console.log(student.fullName);
console.log(student.cgpa);
console.log(student["age"]);
student.fullName="raju"
console.log(student.fullName);

student["age"]=student["age"]+1
console.log(student["age"]);