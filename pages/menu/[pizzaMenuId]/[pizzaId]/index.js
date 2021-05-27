import { useRouter } from "next/router";
import { Fragment } from "react";
import { getPizzaById } from "../../../../DUMMY_PIZZAS";
import Image from "next/image";

const PizzaId = () => {
	const router = useRouter();
	const pizzaId = router.query.pizzaId;
	console.log(pizzaId);
	const selectedPizza = getPizzaById(pizzaId);

	if (!selectedPizza) {
		return <p>No Pizza Found</p>;
	}
	const { name, image, ingredients } = selectedPizza;
	console.log(name, image, ingredients);
	// const image = "/" + selectedPizza.image;
	// console.log(`${image}`);

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
			<section>{ingredients.join(", ")}</section>
		</Fragment>
	);
};

export default PizzaId;
