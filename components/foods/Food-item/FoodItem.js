import Link from "next/link";
import classes from "./FoodItem.module.css";
const FoodItem = (props) => {
	const exploreLink = `/menu/[pizzaMenuId]/${props.id}`;
	return (
		<li className={classes.food}>
			<Link href={exploreLink}>
				<div className={classes.link}>
					<h3 className={classes.title}>{props.name}</h3>
					{/* <Image
						src={props.image}
						alt={props.name}
						width="50px"
						height="50px"
					/> */}
				</div>
			</Link>
		</li>
	);
};

export default FoodItem;
