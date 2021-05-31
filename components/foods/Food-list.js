import { Fragment } from "react";
import Card from "../UI/Card/Card";
import FoodItem from "./Food-item/FoodItem";
import FoodItemForm from "./Food-item/FoodItemForm/FoodItemForm";
import classes from "./Food-list.module.css";

const FoodList = (props) => {
	const { foods } = props;
	const foodList = foods.map((food) => {
		return (
			<Fragment>
				<FoodItem
					key={food.id}
					id={food.id}
					name={food.name}
					icon={food.icon}
					// description={item.description}
					image={food.image}
				/>
			</Fragment>
		);
	});
	return (
		<section className={classes.food}>
			<Card>
				<ul>{foodList}</ul>
			</Card>
		</section>
	);
};

export default FoodList;
