import { useEffect, useState } from "react";
import useSWR from "swr";

function OnlineDatabase() {
	const [foods, setFoods] = useState();
	// const [isLoading, setIsLoading] = useState(false);

	const { data, error } = useSWR(
		"https://pizza-shop-27b68-default-rtdb.europe-west1.firebasedatabase.app/foods.json"
	); //second argument setted by default on fetch API

	useEffect(() => {
		if (data) {
			const transformedFoods = [];

			for (const key in data) {
				transformedFoods.push({
					id: key,
					name: data[key].name,
					icons: data[key].icons,
				});
			}
			setFoods(transformedFoods);
		}
	}, [data]);

	console.log(data);
	// useEffect(() => {
	// 	setIsLoading(true);
	// 	fetch(
	// 		"https://pizza-shop-27b68-default-rtdb.europe-west1.firebasedatabase.app/foods.json"
	// 	)
	// 		.then((response) => response.json()) //transforms a JSON into a JS object
	// 		.then((data) => {
	// 			const transformedFoods = [];
	// 			for (const key in data) {
	// 				transformedFoods.push({
	// 					id: key,
	// 					food: data[key].name,
	// 					icons: data[key].icons,
	// 				});
	// 			}
	// 			transformedFoods;
	// 			setFoods();
	// 			setIsLoading(false);
	// 		}); //standard fetch browser api
	// }, []);

	if (error) {
		return <p>Failed to load</p>;
	}
	if (!data || !foods) {
		return <p>Loading...</p>;
	}

	const foodList = foods.map((food) => {
		return <li key={food.id}>{food.name}</li>;
	});

	return <ul>{foodList}</ul>;
}

export default OnlineDatabase;
