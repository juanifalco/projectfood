import { useRef, useState } from "react";

import classes from "../Cart/Checkout.module.css"

const isEmpty = value => value.trim() ==="";
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
      const enteredCityIsValid = !isEmpty(enteredCity);

      setFormInputValidity({
        name:enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode:enteredPostalCodeIsValid,
      });

      const formIsValid = 
      enteredNameIsValid && 
      enteredCityIsValid && 
      enteredStreetIsValid && 
      enteredPostalCodeIsValid;

      if (!formIsValid) {
          return;
      }

      //Sumbit cart data 
    };

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? "" : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid}`
    
  
    return (
      <form className={nameControlClasses} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef}/>
        </div>
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
        <div 
        className={streetControlClasses}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street'ref={streetInputRef}/>
        </div>
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
        <div className={postalCodeControlClasses}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalCodeInputRef}/>
        </div>
        {!formInputValidity.postalCode && <p>Please enter a valid postal Code!</p>}
        <div className={cityControlClasses}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputRef} />
        </div>
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    );
  };

  export default Checkout;