import { useState } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePick() {
  const [startDate, setStartDate] = useState<any>(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};