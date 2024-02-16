import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import { getAllEntries } from "./diaryService";
import Entries from "./components/entries";
import AddEntry from "./components/add-entry";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return (
    <>
      <AddEntry entries={entries} setEntries={setEntries} />
      <Entries data={entries} />
    </>
  );
};

export default App;
