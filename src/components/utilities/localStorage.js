const getStoredCart = () =>{
   const storedCart = localStorage.getItem('cart');
   if(storedCart){
    return JSON.parse(storedCart);
   }
   return [];
}


const addCartToStorage = bottle => {
    const cart = getStoredCart();
    cart.push(bottle);
    saveCartToStorage(cart);
}

// to save localStorage, 1st have to convert it into JSON.stringify
const saveCartToStorage = cart => {
    const saveToLS = JSON.stringify(cart);
    localStorage.setItem('cart', saveToLS); 
}

// remove from LS
const removeFromLS = bottleId => {
    const cart = getStoredCart();
    //removing every ids
    const remainingCart = cart.filter(id => id !== bottleId);
    saveCartToStorage(remainingCart);
}


export {getStoredCart, addCartToStorage, removeFromLS};