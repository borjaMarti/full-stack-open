import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  text: string;
  route: string;
}

const NavLink = ({ text, route }: Props) => {
  return (
    <Link component={RouterLink} to={route}>
      {text}
    </Link>
  );
};

export default NavLink;
