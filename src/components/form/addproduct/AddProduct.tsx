"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
// components
import SelectDatePicker from './SelectDatePicker';
import Input from '@/components/input/input'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton';
import InputQuill from '@/components/input/InputQuill';
import Select from '@/components/select/Select'
import MultiSelect from '@/components/select/MultiSelect';

const AddProduct = () => {
    const [values, setValue] = useState({
        title: "",
        funding: "Default *Full Funding*",
        university: "Select University Name",
        degree: "Select Degree Type",
        subjects: [],
        country: "Select Country"
    })
    const { title, funding, university, degree, subjects, country } = values;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
console.log(values)
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <Input
                    label="Enter Title"
                    required
                    name='title'
                    placeholder='Enter Schalorship Title'
                />
                {/* funding type */}
                  <Select
                    placeholder={funding}
                    setValue={setValue}
                    name={"funding"}
                />
                {/* university name */}
                <Select
                    placeholder={university}
                    required
                    setValue={setValue}
                    name={"university"}
                />
                {/* degree name */}
                <Select
                    placeholder={degree}
                    required
                    setValue={setValue}
                    name={"degree"}
                />
                {/* Select Subjects */}
                <MultiSelect
                 placeholder={"Default *all subjects*"}
                 setValue={setValue}
                 name={"subjects"}
                 data={subjects}
                />
                {/* country name */}
                <Select
                    placeholder={country}
                    required
                    setValue={setValue}
                    name={"country"}
                />
                <SelectDatePicker />
                <InputQuill />

                <PrimaryButton text={"Submit"} className='w-full' />
            </form>
        </>
    )
}

export default AddProduct