import React from "react";
import classes from "./Input.module.css";
//Parent: MealItemForm
//Child: div, label, input native html

// qui sto solo abilitando l'elemento input a ricevere refs oltre che props

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
