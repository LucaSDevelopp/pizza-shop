const DUMMY_PIZZAS = [
	{
		id: "pizza-margherita",
		name: "Margherita",
		price: 4.8,
		ingredients: ["Polpa di pomodoro", "mozzarella", "origano", "basilico"],
		image:
			"https://primochef.it/wp-content/uploads/2019/07/SH_pizza_napoletana.jpg",
		isAvailable: true,
	},
	{
		id: "pizza-pugliese",
		name: "Pugliese",
		price: 6,
		ingredients: ["Polpa di pomodoro", "mozzarella", "cipolle"],
		image: "/images/pizza-pugliese.jpg",
		isAvailable: true,
	},
	{
		id: "pizza-quattro-formaggi",
		name: "Quattro formaggi",
		price: 7.5,
		ingredients: [
			"Polpa di pomodoro",
			"mozzarella",
			"fontina",
			"emmental",
			"gorgonzola",
		],
		image: "/images/quattro-formaggi.jpg",
		isAvailable: true,
	},
	{
		id: "pizza-quattro-stagioni",
		name: "Quattro stagioni",
		price: 7,
		ingredients: [
			"Polpa di pomodoro",
			"mozzarella",
			"prosciutto cotto",
			"funghi",
			"carciofi",
			"olive",
		],
		image: "/images/quattro-stagioni.jpg",
		isAvailable: true,
	},
];

export function getAvailablePizzas() {
	return DUMMY_PIZZAS.filter((pizza) => pizza.isAvailable);
}

export function getAllPizzas() {
	return DUMMY_PIZZAS;
}

export function getPizzaById(id) {
	return DUMMY_PIZZAS.find((pizza) => pizza.id === id);
}
