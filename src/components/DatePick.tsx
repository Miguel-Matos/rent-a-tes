import { useState } from "react"
import DatePicker from "react-datepicker";
import { subDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'


export default function DatePick() {
  const [startDate, setStartDate] = useState<any>(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={subDays(new Date(), 0)} />
  );
};