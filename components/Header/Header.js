import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import HomeIcon from "./HomeIcon/HomeIcon";
import UserIconUnlogged from "./HomeIcon/UserIcon/UserIconUnlogged";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.navbar}>
				<div className={classes.logo}>
					<Link href="/" className={classes.image}>
						<Image
							src="/icons/pizza-colori.png"
							alt="Home Pizza Shop"
							width="64px"
							height="64px"
							layout="fixed"
						/>
					</Link>
					<h1 className={classes.brandName}>
						<Link href="/">Brand </Link>
					</h1>
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

					<Link
						href={{
							pathname: "/accedi",
						}}
					>
						<h3>ACCEDI</h3>
					</Link>
				</div>

				<div className={classes.cart}>
					<HeaderCartButton onClick={props.onShowCart} />
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
