console.log("ARRAYS-1")


var arr=[]    //empty array
console.log(arr)

var arr1=[1,true,3.9,null,'sami']   //array with elements
console.log(arr1)                  // 
console.log(arr1.length)          // length of  array
console.log("first item",arr1[0])   //first item of array
console.log("middle item", arr1[Math.floor(arr1.length/2)]) // middle item
console.log("last item",arr1[arr1.length-1])  //last item

var arr2=["string",1,true,8.6,false,"empty"]
console.log(arr2.length)

var itcompanies=['Facebook', 'Google', 'Microsoft',
    'Apple', 'IBM', 'Oracle','Amazon']
    console.log(itcompanies)
    console.log(itcompanies.length)
    console.log("first company-",itcompanies[0])
    console.log("middle company-",itcompanies[Math.floor(itcompanies.length/2)])
    console.log("last company-",itcompanies[itcompanies.length-1])
   
    for(let i=0;i<itcompanies.length;i++){
    console.log(itcompanies[i].toUpperCase())
}

 companies=['Facebook',
    'Google', 'Microsoft', 'Apple', 'IBM' ]

     companies2=[ ' Oracle', 'and', 'Amazon are big IT companies.' ]

        // var allcompanies=[companies+companies2]
console.log(companies+companies2)

console.log(itcompanies.includes("Facebook"))
console.log(itcompanies.includes("genpact"))









