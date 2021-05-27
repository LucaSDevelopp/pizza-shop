import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.navbar}>
				<div className={classes.toSideBar}>
					<div className={classes.logo}>
						<Link href="/" className={classes.image}>
							<Image
								src="/icons/pizza-colori.png"
								alt="Home Pizza Shop"
								width="70px"
								height="70px"
								layout="fixed"
							/>
						</Link>
						<h1 className={classes.brandName}>
							<Link href="/">Brand </Link>
						</h1>
					</div>
					<div className={classes.navbarLinks}>
						<h3>
							<Link href="/menu">MENU</Link>
						</h3>
						<h3>
							<Link href="/menu">BEVANDE</Link>
						</h3>
						<h3>
							<Link href="/promozioni">PROMOZIONI</Link>
						</h3>
						<h3>
							<Link
								href={{
									pathname: "/accedi",
								}}
							>
								ACCEDI
							</Link>
						</h3>
					</div>
				</div>
				<div className={classes.cart}>
					<HeaderCartButton onClick={props.onShowCart} />
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
