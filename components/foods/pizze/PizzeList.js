import { Fragment } from "react";
import Card from "../../UI/Card/Card";
import FoodItemForm from "../Food-item/FoodItemForm/FoodItemForm";
import PizzaItem from "./PizzaItem/PizzaItem";
import classes from "./PizzeList.module.css";

const PizzeList = (props) => {
	const { pizzas } = props;
	const pizzeList = pizzas.map((pizza) => {
		return (
			<div className={classes.item}>
				<PizzaItem
					key={pizza.id}
					id={pizza.id}
					name={pizza.name}
					ingredients={pizza.ingredients}
					image={pizza.image}
					price={pizza.price}
				/>
			</div>
		);
	});
	return (
		<section className={classes.pizze}>
			<Card>
				<ul>{pizzeList}</ul>
			</Card>
		</section>
	);
};

export default PizzeList;
