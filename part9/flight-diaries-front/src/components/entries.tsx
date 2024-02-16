import { DiaryEntry } from "../types";
import Entry from "./entry";

type EntriesProps = {
  data: DiaryEntry[];
};

const Entries = ({ data }: EntriesProps) => {
  return (
    <section>
      <h1>Diary entries</h1>
      <ul style={{ paddingLeft: "0" }}>
        {data.map((entry) => {
          return <Entry key={entry.id} entry={entry} />;
        })}
      </ul>
    </section>
  );
};

export default Entries;
