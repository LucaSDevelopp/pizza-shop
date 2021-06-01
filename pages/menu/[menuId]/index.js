import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";

const MenuId = (props) => {
	const { loadedFood } = props;

	if (!loadedFood) {
		return <p>Loading...</p>;
	}

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

async function getData() {
	const filePath = path.join(process.cwd(), "data", "DUMMY_FOODS.json"); //join in order to be correctly consumed by readFile()
	const jsonData = await fs.readFile(filePath); //the cutrrent working directory is the overall project folder(instead of the pages folder)
	const data = JSON.parse(jsonData); //converts it into a regular JS object
	return data;
}

//here returns the props
export async function getStaticProps(context) {
	const { params } = context;
	const foodURLId = params.menuId;
	const data = await getData(); //load data from database

	const selectedFoodId = data.foods.find((food) => food.id === foodURLId); //comapare data database with url parameters and return matching item
	if (!selectedFoodId) {
		return { notFound: true }; //to use when fallback is true in getStaticPaths
	}

	return {
		props: { loadedFood: selectedFoodId },
	};
}

//here returns the paths (dynamic)
export async function getStaticPaths() {
	const data = await getData();

	const ids = data.foods.map((food) => food.id); //return array with all ids

	const pathsWithParams = ids.map((id) => ({ params: { menuId: id } }));
	return {
		paths: pathsWithParams,
		fallback: false,
	};
}

export default MenuId;
