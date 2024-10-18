import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers';
import { FormControl, InputLabel } from '@mui/material';

export const CourseDatePicker = () => {
    return (
        <>
            <FormControl fullWidth required>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label="Select a date and time *"/>
                </LocalizationProvider>
            </FormControl>
        </>
    )
}