import { useState } from "react";
import dayjs from "dayjs";

import { Month } from "../";
import { getMonth } from "../utils";

import { Outline } from "./date-styled";
import { Container, Flex } from "../style";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Date = () => {
  console.log(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.log(currentMonth);

  return (
    <Outline>
      <Container>
        <Month month={currentMonth} />
        <Flex direction={"row"} content={"center"}>
          <KeyboardArrowLeftIcon
            style={{ color: "#FA5252DE", fontSize: "40px" }}
          />
          <p>{dayjs().format("MMMM")}</p>
          <KeyboardArrowRightIcon
            style={{ color: "#FA5252DE", fontSize: "40px" }}
          />
        </Flex>
      </Container>
    </Outline>
  );
};

export default Date;
