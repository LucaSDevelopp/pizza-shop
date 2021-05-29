import Link from "next/link";
import classes from "./FoodItem.module.css";
import Image from "next/image";
const FoodItem = (props) => {
	const exploreLink = `/menu/[pizzaMenuId]/${props.id}`;
	return (
		<li className={classes.food}>
			<Link href={exploreLink}>
				<div className={classes.link}>
					<h2 className={classes.title}>{props.name}</h2>
					<Image src={props.icon} alt={props.name} width="80px" height="80px" />
				</div>
			</Link>
		</li>
	);
};

export default FoodItem;
