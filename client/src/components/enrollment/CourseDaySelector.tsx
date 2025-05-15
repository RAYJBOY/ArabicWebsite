import {
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface CourseDaySelectorProps {
  numberOfCourseDays: number | undefined;
  setNumberOfCourseDays: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

export const CourseDaySelector = ({
  numberOfCourseDays,
  setNumberOfCourseDays,
}: CourseDaySelectorProps) => {
  const [shouldError, setShouldError] = useState(false);
  const handleCourseDaySelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) < 0 ||
      Number(event.target.value) > 30
    ) {
      setShouldError(true);
      setNumberOfCourseDays(0);
    } else {
      setShouldError(false);
      setNumberOfCourseDays(Number(event.target.value));
    }
  };

  return (
    <>
      <FormControl fullWidth>
        <TextField
          type="number"
          onChange={handleCourseDaySelect}
          value={numberOfCourseDays}
          required
          label="Enter number of classes in a month"
          error={shouldError}
        ></TextField>
      </FormControl>
    </>
  );
};
