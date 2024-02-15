import { CoursePart } from "../App";

interface PartProps {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = (props: PartProps) => {
  const kind = props.part.kind;

  switch (kind) {
    case "basic":
      return (
        <>
          <p>{props.part.description}</p>
        </>
      );
    case "group":
      return (
        <>
          <p>{props.part.groupProjectCount}</p>
        </>
      );
    case "background":
      return (
        <>
          <p>{props.part.description}</p>
          <p>{props.part.backgroundMaterial}</p>
        </>
      );
    case "special":
      return (
        <>
          <p>{props.part.description}</p>
          <p>{props.part.requirements}</p>
        </>
      );
    default:
      return assertNever(kind);
  }
};

export default Part;
