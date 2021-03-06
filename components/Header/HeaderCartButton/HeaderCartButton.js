import CartIcon from "./CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span className={classes.badge}></span>
		</button>
	);
};

export default HeaderCartButton;
