import {_} from 'lodash';

/*
LBM = BW − BF

Lean Body Mass equals Body Weight minus Body Fat

LBM + BF = BW

Lean Body Mass plus Body Fat equals Body Weight

LBM is usually estimated using mathematical formulas.

The following formula may be used:[1]

For men : LBM = (0.32810 * W) + (0.33929 * H) - 29.5336

For women : LBM = (0.29569 * W) + (0.41813 * H) - 43.2933

where W is body weight in kilograms and H is body height in centimeters.

A Nomogram based on height, weight and arm circumference may be used.[2]
 */
function errorForNonNumbers(value, name)
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

function leanExactBodyMassForFemales(bodyWeight, bodyHeight)
{

	// Body Beast: return (100 - bodyFatPercentage) / 100 * weight;
	// Wikipedia
	// - Estimate
	// bodyWeight - bodyFatPercentage
	// - Exact
	return (0.29569 * bodyWeight) + (0.41813 * bodyHeight) - 43.2933;
}

