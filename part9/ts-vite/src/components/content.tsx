import Part from "./part";
import { CoursePart } from "../App";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((part) => (
        <div>
          <p>
            {part.name} {part.exerciseCount}
          </p>
          <div>
            <Part part={part} />
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Content;
