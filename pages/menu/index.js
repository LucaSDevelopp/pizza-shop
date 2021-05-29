import { Fragment } from "react";
import { getAvailablePizzas } from "../../DUMMY_PIZZAS";
import PizzeList from "../../components/foods/pizze/PizzeList";

//my-domain/menu -> list of all types of food: pizzas, calzone, panzerotto...

const AvailablePizzas = () => {
	const availablePizzas = getAvailablePizzas();
	return (
		<Fragment>
			<PizzeList items={availablePizzas} />
		</Fragment>
	);
};

export default AvailablePizzas;
