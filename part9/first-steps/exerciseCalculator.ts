import { isNotNumber } from "./utils";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Arguments {
  dailyHours: number[];
  target: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseExerciseArguments = (args: any[]): Arguments => {
  if (args.length < 4) throw new Error('Need at least target and 1 day for arguments.');
  const test = args.slice(2).every((e) => {
    if (isNotNumber(e)) return false;
    if (Number(e) < 0 || Number(e) > 24) return false;
    return true;
  });

  if (test) {
    return {
      dailyHours: args.slice(3).map(e => +e),
      target: +args[2],
    };
  } else {
    throw new Error('Provided values were not valid numbers!');
  }
};

const calculateExercises = (dailyHours: number[], target: number): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter(e => e > 0).length;
  const totalHours = dailyHours.reduce((acc, e) => {
    return acc + e;
  }, 0);
  const average = totalHours / periodLength;
  const success = average >= target;
  let rating;
  let ratingDescription;

  switch (true) {
    case average < (target * 0.5):
      rating = 1;
      ratingDescription = 'need to apply more';
      break;
    case average < target:
      rating = 2;
      ratingDescription = 'not too bad but could be better';
      break;
    case average >= target:
      rating = 3;
      ratingDescription = 'well done!';
      break;
    default:
      throw new Error("Something went very wrong.");
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

// try {
//   const { dailyHours, target } = parseExerciseArguments(process.argv);
//   console.log(calculateExercises(dailyHours, target));
// } catch (error: unknown) {
//   let errorMessage = 'Something went wrong.';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

export { parseExerciseArguments, calculateExercises };
