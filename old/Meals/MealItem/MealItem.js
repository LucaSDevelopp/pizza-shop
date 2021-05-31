import React, { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
//parent: AvailableMealItem
//child: MealItemForm

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	//qui aggiungo gli item al contatore amount di HeaderCartButton grazie al Context object CartContext
	const addToCartHandler = (amount) => {
		//accedo al metodo interno e gli passo questo oggetto item da cui sto scrivendo
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			//amount ce l'ho grazie a tutto il lavoro del componente figlio con i ref sull'input element del DOM
			amount: amount,
			price: props.price,
		});
	};

	const price = `$${props.price}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} id={props.id} />
			</div>
		</li>
	);
};

export default MealItem;
