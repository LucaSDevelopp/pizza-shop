import { useRouter } from "next/router";
import { Fragment } from "react";
import Image from "next/image";

const PizzaId = (props) => {
	const router = useRouter();
	const pizzaId = router.query.pizzaId;
	console.log(pizzaId);
	const selectedPizza = pizzas.find((pizza) => pizza.id === id);

	if (!selectedPizza) {
		return <p>No Pizza Found</p>;
	}
	const { name, image, ingredients } = selectedPizza;
	console.log(name, image, ingredients);

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
