import React, { useState, useRef } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
//Parent:MealItem
//Child: Input

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	// una volta abilitato l'elemento input a ricevere ref posso ora lavorarci da qui con la sua istanza
	// una volta acquisito il value digitato nel'input (amount) lo devo passare su al componente genitore per essere elaborato assieme all'id e altri dati
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		//qui passo al componente genitore l'amount acquisito dall'input DOM element- digitato / scelto dall'utente
		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
