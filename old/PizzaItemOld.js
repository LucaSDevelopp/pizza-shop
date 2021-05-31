import Link from "next/link";
import FoodItemForm from "../../Food-item/FoodItemForm/FoodItemForm";
import classes from "./PizzaItem.module.css";
const PizzaItem = (props) => {
	const price = `€ ${props.price}`;
	const ingredients = props.ingredients.join(", ");
	const exploreLink = `/menu/pizze/${props.id}`;
	return (
		<li className={classes.pizza}>
			<Link href={exploreLink}>
				<div className={classes.link}>
					<h3 className={classes.title}>{props.name}</h3>

					<div className={classes.ingredients}>{ingredients}</div>
					<div className={classes.price}>{price}</div>
				</div>
			</Link>
			<FoodItemForm />
		</li>
	);
};

export default PizzaItem;
