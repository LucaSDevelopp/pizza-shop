import Card from "../UI/Card/Card";
import FoodItem from "./Food-item/FoodItem";
import classes from "./Food-list.module.css";

const FoodList = (props) => {
	const { items } = props;
	const foodList = items.map((item) => {
		return (
			<FoodItem
				key={item.id}
				id={item.id}
				name={item.name}
				// description={item.description}
				image={item.image}
			/>
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
