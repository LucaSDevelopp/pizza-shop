import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";
import PizzeList from "../../components/foods/pizze/PizzeList";

//my-domain/menu -> list of all types of food: pizzas, calzone, panzerotto...

const AvailablePizzas = (props) => {
	return (
		<Fragment>
			<PizzeList pizzas={props.pizzas} />
		</Fragment>
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "data", "DUMMY_PIZZAS.json"); //join in order to be correctly consumed by readFile()
	const jsonData = await fs.readFile(filePath); //the current working directory is the overall project folder(instead of the pages folder)
	const data = JSON.parse(jsonData); //converts it into a regular JS object
	return {
		props: { pizzas: data.pizzas },
	};
}

export default AvailablePizzas;
