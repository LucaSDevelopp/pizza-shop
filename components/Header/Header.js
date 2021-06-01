import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Phone from "../UI/symbols/Phone";
import UserAdd from "../UI/symbols/UserAdd";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import HomeIcon from "./HomeIcon/HomeIcon";
import UserIconUnlogged from "./HomeIcon/UserIcon/UserIconUnlogged";

const Header = (props) => {
	return (
		<Fragment>
			{/* <header className={classes.navbar}>
				<div className={classes.logo}>
					<Link href="/" className={classes.image}>
						<Image
							src="/icons/pizza-colori.png"
							alt="Home Pizza Shop"
							width="56px"
							height="56px"
							layout="fixed"
						/>
					</Link>
					<h2 className={classes.brandName}>
						<Link href="/">Brand </Link>
					</h2>
					<div></div>
				</div>
				<div className={classes.navbarLinks}>
					<Link href="/menu">
						<h3>MENU</h3>
					</Link>

					<Link href="/menu">
						<h3>BEVANDE</h3>
					</Link>

					<Link href="/promozioni">
						<h3>PROMOZIONI</h3>
					</Link>

					<Link href="/accedi">
						<div>
							<userAdd />
							<h3>ACCEDI</h3>
						</div>
					</Link>
				</div>
				<div className={classes.cart}>
					<HeaderCartButton onClick={props.onShowCart} />
				</div>
			</header> */}
		</Fragment>
	);
};

export default Header;
