import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import { getAllEntries } from "./diaryService";
import Entries from "./components/entries";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return (
    <>
      <Entries data={entries} />
    </>
  );
};

export default App;
