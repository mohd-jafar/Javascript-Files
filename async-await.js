let button = document.querySelector('.getdata')
let datacont = document.querySelector('.fordisplay')

button.addEventListener( 'click', ()=>{

async function jumbo(){
    let response = await fetch('https://dummyjson.com/products')
    let next = await response.json()
    return next
}
jumbo().then(response=>{

    console.log(response)
    onScreen(response)
})

})

function onScreen(getthedata){


    
    let collection = getthedata.products
    collection.map((e)=>{
        datacont.innerHTML += `<img src='${e.images[1]}' width=300px height=200px />
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <p>Rs.${e.price}</p>
        <hr>`

    })
}