import { useRouter } from "next/router";

const PizzaMenuId = () => {
	const router = useRouter();
	console.log("pathnmae is: " + router.pathname);
	console.log("query is: ", router.query);
	return (
		<div>
			<h1>Pizze Bianche e rosse</h1>
			<h1>Calzoni</h1>
			<h1>Focacce</h1>
		</div>
	);
};

export default PizzaMenuId;
