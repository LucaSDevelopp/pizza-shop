import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Shop</title>
				<meta name="Pizza Shop" content="A new way to order pizzas" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
