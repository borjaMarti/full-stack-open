import { isNotNumber } from "./utils";

interface BmiValues {
  height: number;
  weight: number;
}

const parseBmiArguments = (args: string[]): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNotNumber(args[2]) && !isNotNumber(args[3])) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / (height / 100) ** 2;
  switch (true) {
    case bmi < 16:
      return "Underweight (Severe thinness)";
    case bmi >= 16 && bmi <= 16.9:
      return "Underweight (Moderate thinness)";
    case bmi >= 17 && bmi <= 18.4:
      return "Underweight (Mild thinness)";
    case bmi >= 18.5 && bmi <= 24.9:
      return "Normal (healthy weight)";
    case bmi >= 25 && bmi <= 29.9:
      return "Overweight (Pre-obese)";
    case bmi >= 30 && bmi <= 34.9:
      return "Obese (Class I)";
    case bmi >= 35 && bmi <= 39.9:
      return "Obese (Class II)";
    case bmi >= 40:
      return "Obese (Class III)";
    default:
      throw new Error("Invalid parameters.");
  }
};

// try {
//   const { height, weight } = parseBmiArguments(process.argv);
//   console.log(calculateBmi(height, weight));
// } catch (error: unknown) {
//   let errorMessage = 'Something went wrong.';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

export { parseBmiArguments, calculateBmi };
