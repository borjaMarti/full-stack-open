import { FormEvent } from "react";
import { addEntry } from "../diaryService";

const AddEntry = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const date = formData.get("date");
    const visibility = formData.get("visibility");
    const weather = formData.get("weather");
    const comment = formData.get("comment");
    try {
      const newEntry = await addEntry({
        date: date,
        visibility: visibility,
        weather: weather,
        comment: comment,
      });
      console.log(newEntry);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1>Add New Entry</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" />
        <label htmlFor="visibility">Visibility</label>
        <input id="visibility" name="visibility" type="text" />
        <label htmlFor="weather">Weather</label>
        <input id="weather" name="weather" type="text" />
        <label htmlFor="comment">Comment</label>
        <input id="comment" name="comment" type="text" />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default AddEntry;
