import Link from "next/link";
import classes from "./FoodItem.module.css";
import Image from "next/image";
const FoodItem = (props) => {
	const exploreLink = `/menu/${props.id}`;
	return (
		<Link href={exploreLink}>
			<div className={classes.link}>
				<h2 className={classes.title} className={classes.bump}>
					{props.name}
				</h2>
				<div className={classes.image} className={classes.bump}>
					<Image
						src={props.icon}
						alt={props.name}
						width="120px"
						height="75px"
					/>
				</div>
			</div>
		</Link>
	);
};

export default FoodItem;
