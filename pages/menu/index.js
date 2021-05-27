import { Fragment } from "react";
import { getAvailablePizzas } from "../../DUMMY_PIZZAS";
import PizzeList from "../../src/components/Pizze/pizze-list";

//Parent: App

const AvailablePizzas = () => {
	const availablePizzas = getAvailablePizzas();
	return (
		<Fragment>
			<PizzeList items={availablePizzas} />
		</Fragment>
	);
};

export default AvailablePizzas;
