import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers';
import { FormControl } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

interface CourseDatePickerProps {
    date: Dayjs | null,
    setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

export const CourseDatePicker = ({date, setDate}: CourseDatePickerProps) => {
    return (
        <>
            <FormControl fullWidth required>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label="Select a date and time *" onChange={(value) => setDate(value)} value={date}/>
                </LocalizationProvider>
            </FormControl>
        </>
    )
}