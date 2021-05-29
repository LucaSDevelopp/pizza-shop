import Head from "next/head";
import { DUMMY_FOODS } from "../DUMMY_FOODS";
import FoodList from "../components/foods/Food-list";
import { getAvailablePizzas } from "../DUMMY_PIZZAS";

import styles from "../styles/Home.module.css";
import PizzeList from "../components/foods/pizze/PizzeList";

//my-domain/

export default function Home() {
	const availablePizzas = getAvailablePizzas();
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Shop</title>
				<meta name="Pizza Shop" content="A new way to order pizzas" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<FoodList items={DUMMY_FOODS} />
			{/* <PizzeList items={availablePizzas} /> */}
			{/* <FoodList items={DUMMY_FOODS} /> */}
		</div>
	);
}
