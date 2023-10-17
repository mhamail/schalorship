"use client"
import React, { useState, FC } from 'react'
import { DatePicker } from '@/components/ui/datePicker/DatePicker'

interface Props {
    formData: FormData
}
const SelectDatePicker: FC<Props> = ({ formData }) => {
    const [from, setFrom] = useState<Date>()
    const [to, setTo] = useState<Date>()
    if (from) {
        const isoDateString = from.toISOString();
        formData.set("dateFrom", isoDateString)
    }
    if (to) {
        const isoDateString = to.toISOString();
        formData.set("dateTo", isoDateString)
    }

    return (
        <div>
            Open from &nbsp;
            <DatePicker date={from} setDate={setFrom} /> &nbsp;
            to &nbsp;
            <DatePicker date={to} setDate={setTo} />
        </div>
    )
}

export default SelectDatePicker