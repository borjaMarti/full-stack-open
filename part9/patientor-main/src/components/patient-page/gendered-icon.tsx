import TransgenderIcon from "@mui/icons-material/Transgender";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Gender } from "../../types";

interface Props {
  gender: Gender;
}

const GenderedIcon = ({ gender }: Props) => {
  if (gender === "male") return <MaleIcon titleAccess="male" />;
  if (gender === "female") return <FemaleIcon titleAccess="female" />;
  else return <TransgenderIcon titleAccess="other" />;
};

export default GenderedIcon;
