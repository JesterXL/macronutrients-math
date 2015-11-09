import {_} from 'lodash';

// newFood.calories = (newFood.protein * 4) + (newFood.carbs * 4) + (newFood.fat * 9);

export function errorForNonNumbers(value, name)
{
	if(_.isString(name) === false)
	{
		throw new Error("No name for failed parameter.");
	}


	if(_.isNumber(value) === false || _.isNaN(value) === true)
	{
		throw new Error(name + " is not a number");
	}
}

export function caloriesFromProteinGrams(proteinGrams)
{
	errorForNonNumbers(proteinGrams, "proteinGrams");
	return proteinGrams * 4;
}

export function gramsFromProteinCalories(proteinCalories)
{
	errorForNonNumbers(proteinCalories, "proteinCalories");
	return proteinCalories / 4;
}

export function caloriesFromCarbohydrateGrams(carbohydrateGrams)
{
	errorForNonNumbers(carbohydrateGrams, "carbohydrateGrams");
	return carbohydrateGrams * 4;
}

export function gramsFromCarbohydrateCalories(carbohydrateCalories)
{
	errorForNonNumbers(carbohydrateCalories, "carbohydrateCalories");
	return carbohydrateCalories / 4;
}

export function caloriesFromFatGrams(fatGrams)
{
	errorForNonNumbers(fatGrams, "fatGrams");
	return fatGrams * 9;
}

export function gramsFromFatCalories(fatCalories)
{
	errorForNonNumbers(fatCalories, "fatCalories");
	return fatCalories / 9;
}

export function caloriesFromAlcoholGrams(alcoholGrams)
{
	errorForNonNumbers(alcoholGrams, "alcoholGrams");
	return alcoholGrams * 7;
}

export function gramsFromAlcoholCalories(alcoholCalories)
{
	errorForNonNumbers(alcoholCalories, "alcoholCalories");
	return alcoholCalories / 7;
}

export function caloriesFromFoodGrams(proteinGrams, carbohydrateGrams, fatGrams, alcoholGrams)
{
	errorForNonNumbers(proteinGrams, "proteinGrams");
	errorForNonNumbers(carbohydrateGrams, "carbohydrateGrams");
	errorForNonNumbers(fatGrams, "fatGrams");
	errorForNonNumbers(alcoholGrams, "alcoholGrams");
	return _.reduce([
				caloriesFromProteinGrams(proteinGrams),
				caloriesFromCarbohydrateGrams(carbohydrateGrams),
				caloriesFromFatGrams(fatGrams),
				caloriesFromAlcoholGrams(alcoholGrams)
			], 
			(sum, value) => sum + value);
}

export function gramsFromFoodCalories(proteinCalories, carbohydrateCalories, fatCalories, alcoholCalories)
{
	errorForNonNumbers(proteinCalories, "proteinCalories");
	errorForNonNumbers(carbohydrateCalories, "carbohydrateCalories");
	errorForNonNumbers(fatCalories, "fatCalories");
	errorForNonNumbers(alcoholCalories, "alcoholCalories");
	return _.reduce([
				gramsFromProteinCalories(proteinCalories),
				gramsFromCarbohydrateCalories(carbohydrateCalories),
				gramsFromFatCalories(fatCalories),
				gramsFromAlcoholCalories(alcoholCalories)
			],
			(sum, value) => sum + value);
}


