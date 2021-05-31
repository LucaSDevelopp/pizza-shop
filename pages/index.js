import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import FoodList from "../components/foods/Food-list";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

//my-domain/
function Home(props) {
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
			<FoodList items={props.foods} />
		</div>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "data", "DUMMY_FOODS.json"); //join in order to be correctly consumed by readFile()
	const jsonData = await fs.readFile(filePath); //the cutrrent working directory is the overall project folder(instead of the pages folder)
	const data = JSON.parse(jsonData); //converts it into a regular JS object
	return {
		props: { foods: data.foods },
	};
}

export default Home;
