fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(menu => {
    
    const menuItem = document.getElementById('menu-items');
    menu.forEach(menu => {
        const span = document.createElement('span')
        span.textContent = menu.name
        menuItem.appendChild(span)

        span.addEventListener('click', () => {

            let dishImage = document.getElementById('dish-image')
            let dishTitle = document.getElementById('dish-name')
            let dishDescription = document.getElementById('dish-description')                
            let dishPrice = document.getElementById('dish-price')
            
            dishImage.src = menu.image
            dishTitle.textContent = menu.name
            dishDescription.textContent = menu.description
            dishPrice.textContent = `$ ${menu.price}`
        })
    })
    displayDish(menu[0]);
})

function displayDish(menu) {
    let dishImage = document.getElementById('dish-image')
    let dishTitle = document.getElementById('dish-name')
    let dishDescription = document.getElementById('dish-description')
    let dishPrice = document.getElementById('dish-price')

    dishImage.src = menu.image
    dishTitle.textContent = menu.name
    dishDescription.textContent = menu.description
    dishPrice.textContent = `$ ${menu.price}`
}

const cartAmount = document.querySelector('#cart-form')
const numberInCart = document.querySelector('#number-in-cart')
    
cartAmount.addEventListener('submit', (e) => {
    e.preventDefault()
    // access the value of the input from the form
    const cartTotal = document.querySelector('#cart-amount').value
    // add the previous value to the current value 
    numberInCart.textContent = parseInt(cartTotal) + parseInt(numberInCart.textContent)
    // reset the form after submission 
    cartAmount.reset()
})
