import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";

const MenuId = (props) => {
	const { loadedFood } = props;

	// if (!selectedFoodId) {
	// 	return <p>No Food Found</p>;
	// }
	const { name, image } = loadedFood;

	return (
		<Fragment>
			<section>
				<Image
					src={image}
					alt={name}
					layout="responsive"
					width={100}
					height={100}
				/>
			</section>
			<h1>{name}</h1>
		</Fragment>
	);
};

//here returns the props
export async function getStaticProps(context) {
	const { params } = context;
	const foodURLId = params.menuId;
	const filePath = path.join(process.cwd(), "data", "DUMMY_FOODS.json"); //join in order to be correctly consumed by readFile()
	const jsonData = await fs.readFile(filePath); //the cutrrent working directory is the overall project folder(instead of the pages folder)
	const data = JSON.parse(jsonData); //converts it into a regular JS object

	const selectedFoodId = data.foods.find((food) => food.id === foodURLId);
	return {
		props: { loadedFood: selectedFoodId },
	};
}

//here returns the paths (dynamic)
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { menuId: "focacce" } },
			{ params: { menuId: "pizze" } },
			{ params: { menuId: "calzoni" } },
			{ params: { menuId: "panini" } },
			{ params: { menuId: "panini-hamburger" } },
			{ params: { menuId: "fritti" } },
			{ params: { menuId: "dessert" } },
		],
		fallback: false,
	};
}

export default MenuId;
