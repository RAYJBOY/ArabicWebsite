import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface DateOfBirthProps {
  setDateOfBirth: (date: string | undefined) => void;
}

export const DateOfBirth = ({ setDateOfBirth }: DateOfBirthProps) => {
  const [localDateOfBirth, setLocalDateOfBirth] = useState<string>();

  const handleDateOfBirthSelected = (date: any) => {
    console.log("Selected date of birth:", dayjs(date).format("YYYY-MM-DD"));
    setLocalDateOfBirth(dayjs(date).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    if (localDateOfBirth) {
      setDateOfBirth(localDateOfBirth);
    }
  }, [localDateOfBirth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label="Date of Birth"
        slotProps={{
          textField: { fullWidth: true },
          
        }}
        closeOnSelect
        onChange={handleDateOfBirthSelected}
      />
    </LocalizationProvider>
  );
};
