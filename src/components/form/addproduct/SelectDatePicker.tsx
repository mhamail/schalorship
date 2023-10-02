"use client"
import React, { useState } from 'react'
import { DatePicker } from '@/components/ui/datePicker/DatePicker'

const SelectDatePicker = () => {
    const [from, setFrom] = useState<Date>()
    const [to, setTo] = useState<Date>()
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