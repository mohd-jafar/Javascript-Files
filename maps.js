// array.map(function(currentValue, index, arr), thisValue)
// function addNumbers(a, b) {
//     return a + b;
//   }
  


console.log("MAPS")

var arr1=['html','css','js']
var arr2=arr1.map((a)=>{
    return a.toUpperCase();
})
console.log(arr2)



var arr3=[1,2,3,4]
var arr4=arr3.map((a)=>{
    return a*a;
})
console.log(arr4)


// var objects=[]


const products = [
    { name: 'pen', price: 5 },
    { name: 'Pencil', price: 10 },
    { name: 'book', price: 30 },
  ];
  
  const productNames = products.map((e)=> {
    return{
      name : e.name,
      price : e.price
  }})
  console.log(productNames)



var Celsius=[65,99,50,10]
// var fahrenheit=[78,10.5,50.6,10.6]

var difftemps=Celsius.map((e)=>{
  return (e * 9/5)
})

console.log("different temperatures",difftemps)








const studentsdetails=[
  {name:"abc",age:25},
  {name:"xyz",age:19},
  {name:"efg",age:30},
  
];

const studentslist=studentsdetails.map((e)=>{
  return{
    name:e.name,
    age:e.age
  
}})
  console.log(studentslist)








