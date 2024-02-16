import { DiaryEntry } from "../types";

type EntryProps = {
  entry: DiaryEntry;
};

const Entry = ({ entry }: EntryProps) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <h2>{entry.date}</h2>
      <p>visibility: {entry.weather}</p>
      <p>weather: {entry.visibility}</p>
      <p>comment: {entry.comment}</p>
    </li>
  );
};

export default Entry;
