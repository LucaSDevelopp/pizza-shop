import Card from "../../UI/Card/Card";
import PizzaItem from "./PizzaItem/PizzaItem";
import classes from "./PizzeList.module.css";

const PizzeList = (props) => {
	const { items } = props;
	const pizzeList = items.map((item) => {
		return (
			<PizzaItem
				key={item.id}
				id={item.id}
				name={item.name}
				ingredients={item.ingredients}
				image={item.image}
				price={item.price}
			/>
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
