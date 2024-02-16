import { SetStateAction, Dispatch, FormEvent, useState } from "react";
import { addEntry } from "../diaryService";
import { isAxiosError } from "axios";
import toNewDiaryEntry from "../utlils";
import { DiaryEntry } from "../types";

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

interface AddEntryProps {
  setEntries: Dispatch<SetStateAction<DiaryEntry[]>>;
  entries: DiaryEntry[];
}

const AddEntry = ({ setEntries, entries }: AddEntryProps) => {
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const date = formData.get("date");
    const visibility = formData.get("visibility");
    const weather = formData.get("weather");
    const comment = formData.get("comment");
    try {
      const newDiaryEntry = toNewDiaryEntry({
        date,
        visibility,
        weather,
        comment,
      });
      const newEntry = await addEntry(newDiaryEntry);
      setEntries([...entries, newEntry]);
      form.reset();
    } catch (error) {
      if (isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        if (typeof error.response?.data === "string") {
          setError(error.response.data);
        } else {
          setError(error.message);
        }
      } else {
        console.error(error);
      }
    }
  };

  return (
    <section>
      <h1>Add New Entry</h1>
      <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select a date:</legend>
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" />
        </fieldset>
        <fieldset>
          <legend>Select visibility level:</legend>
          <label>
            <input id="great" name="visibility" value="great" type="radio" />
            Great
          </label>
          <label>
            <input id="good" name="visibility" value="good" type="radio" />
            Good
          </label>
          <label>
            <input id="ok" name="visibility" value="ok" type="radio" />
            Ok
          </label>
          <label>
            <input id="poor" name="visibility" value="poor" type="radio" />
            Poor
          </label>
        </fieldset>
        <fieldset>
          <legend>Select a weather condition:</legend>
          <label>
            <input id="sunny" name="weather" value="sunny" type="radio" />
            Sunny
          </label>
          <label>
            <input id="rainy" name="weather" value="rainy" type="radio" />
            Rainy
          </label>
          <label>
            <input id="cloudy" name="weather" value="cloudy" type="radio" />
            Cloudy
          </label>
          <label>
            <input id="stormy" name="weather" value="stormy" type="radio" />
            Stormy
          </label>
          <label>
            <input id="windy" name="weather" value="windy" type="radio" />
            Windy
          </label>
        </fieldset>
        <fieldset>
          <legend>Write a comment:</legend>
          <label>
            Comment
            <textarea id="comment" name="comment"></textarea>
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default AddEntry;
