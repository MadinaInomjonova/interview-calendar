import { Day } from "..";

import { Flex, Grid } from "../style";

const Month = ({ month }) => {
  return (
    <>
      {month.map((row, i) => (
        <Flex direction={"row"} key={i}>
          {row.map((day, idx) => (
            <Grid>
              <Day day={day} key={idx} rowIdx={i} />
            </Grid>
          ))}
        </Flex>
      ))}
    </>
  );
};

export default Month;
