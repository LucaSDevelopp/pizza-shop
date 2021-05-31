import React, { useState, useEffect } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				"https://react-http-efd4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
			);

			// if (!response.ok) {
			// 	throw new Error("Something went wrong"); //this string will be storde in the message property of the created error object
			// }
			const responseData = await response.json();

			const loadedMeals = [];
			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			///only traditional way to handle an error inside of a promise
			setIsLoading(false);
			setHttpError(error.message);
			console.log(error);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				id={meal.id}
				key={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			/>
		);
	});
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
