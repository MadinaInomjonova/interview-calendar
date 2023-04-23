import dayjs from "dayjs";

import { Flex } from "../style";
import { BgColor } from "./day-styled";

const Day = ({ day, rowIdx }) => {
  return (
    <Flex direction={"column"}>
      {rowIdx === 0 && <p>{day.format("ddd").slice(0, 1)}</p>}
      {day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? (
        <BgColor>{day.format("DD")}</BgColor>
      ) : (
        day.format("DD")
      )}
    </Flex>
  );
};

export default Day;
