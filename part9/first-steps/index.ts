import express from 'express';
import { parseBmiArguments, calculateBmi } from './bmiCalculator';
import { parseExerciseArguments, calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if (typeof req.query.height !== 'string' || typeof req.query.weight !== 'string') {
    return res.json({ error: "missing parameters" });
  }

  try {
    const { height, weight } = parseBmiArguments(['', '', req.query.height, req.query.weight]);
    return res.json({ weight, height, bmi: calculateBmi(height, weight) });
  } catch (error: unknown) {
    return res.json({ error: "malformatted parameters" });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || (!target && target !== 0)) {
    return res.status(400).json({ error: "missing parameters" });
  }

  if (!Array.isArray(daily_exercises) || typeof target !== 'number') {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  try {
    const { dailyHours, target: tempTarget } = parseExerciseArguments(['', '', target, ...daily_exercises]);
    const response = calculateExercises(dailyHours, tempTarget);
    return res.status(200).json(response);
  } catch (error: unknown) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
