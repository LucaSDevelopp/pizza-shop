import Head from "next/head";
import { DUMMY_FOODS } from "../DUMMY_FOODS";
import FoodList from "../components/foods/Food-list";
import { getAvailablePizzas } from "../DUMMY_PIZZAS";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//my-domain/

export default function Home() {
	const availablePizzas = getAvailablePizzas();
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Shop</title>
				<meta name="Pizza Shop" content="A new way to order pizzas" />
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>
			{/* <Image
				className={styles.landingImage}
				src="/images/pizze/dough.jpg"
				alt="dough"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/> */}
			<FoodList items={DUMMY_FOODS} />
			{/* <PizzeList items={availablePizzas} /> */}
			{/* <FoodList items={DUMMY_FOODS} /> */}
		</div>
	);
}
