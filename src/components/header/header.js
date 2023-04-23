import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { FlexBox, Title } from "./header-styled";
import "./header.css";

const Header = () => {
  return (
    <FlexBox className="container">
      <Title>Interview Calendar</Title>
      <AddOutlinedIcon style={{ color: "#FA5252DE", fontSize: "40px" }} />
    </FlexBox>
  );
};

export default Header;
