import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import FoodList from "../components/foods/Food-list";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

//my-domain/
function Home(props) {
	const { foods } = props;

	if (!foods) {
		return <p>Loading...</p>;
	}
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
			<FoodList foods={foods} />
		</div>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "data", "DUMMY_FOODS.json"); //join in order to be correctly consumed by readFile()
	const jsonData = await fs.readFile(filePath); //the cutrrent working directory is the overall project folder(instead of the pages folder)
	const data = JSON.parse(jsonData); //converts it into a regular JS object

	if (!data) {
		return {
			redirect: {
				destination: "/no-data",
			},
		};
	}

	if (data.foods.lenght === 0) {
		return { notFound: true };
	}

	return {
		props: { foods: data.foods },
		revalidate: 10, //revalidate the request after a certaina mount of seconds(gestServerSideProps don't need this because will always run again)
	};
}

export default Home;
