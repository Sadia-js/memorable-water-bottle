import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addCartToStorage, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [bottlePurchase, setBottlePurchase] = useState([]);

  useEffect(() => {
    fetch("/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((err) => console.log("error", err.message));
  }, []);

  const handlePurchaseButton = bottle => {
    // console.log('bottle purchased');
    // console.log(bottle)
    setBottlePurchase([...bottlePurchase, bottle])
    addCartToStorage(bottle.id);
  }

  const handleRemoveButton = id => {
    //   console.log(id);
    // visual bottlePurchase remove
    const remainingCart = bottlePurchase.filter(bottle => bottle.id !== id);
    setBottlePurchase(remainingCart);
    // remove from local storage 
    removeFromLS(id);
  }
  useEffect(()=>{
    // console.log('before changing the value of bottles', bottles.length);
    const savedCart = getStoredCart();
    if(bottles.length){
        // console.log(savedCart, bottles);
        const addCart = [];
        for(const id of savedCart){
            // console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                addCart.push(bottle);
            }
        }
        // console.log('addCart', addCart);
        setBottlePurchase(addCart);
    }
  },[bottles])

  return (
    <>
      <h3>Bottles Available : {bottles.length}</h3>
      <Cart bottlePurchase={bottlePurchase} handleRemoveButton={handleRemoveButton}></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handlePurchaseButton={handlePurchaseButton}></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
