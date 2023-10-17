"use client"
import React, { useState, useEffect } from 'react'
// components
import dynamic from 'next/dynamic';
const InputQuill = dynamic(() => import('@/components/form/input/InputQuill'), {
    ssr: false, // Disable server-side rendering
  });
import SelectDatePicker from './SelectDatePicker';
import Input from '@/components/form/input/input'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton';
// import InputQuill from '@/components/form/input/InputQuill';
import Select from '@/components/select/Select'
import MultiSelect from '@/components/select/MultiSelect';
import FileUpload from '../fileUpload/FileUpload';
import { addProduct } from '@/action/schalorship';
const AddProduct = () => {
    const [values, setValue] = useState<any>({
        title: "",
        funding: "Default *Full Funding*",
        university: "Select University Name",
        degree: "Select Degree Type",
        subjects: [],
        country: "Select Country",
        description: ""
    })

    const [formData, setFormData] = useState<FormData>(new FormData());

    useEffect(() => {
        setFormData(new FormData())
    }, [])

    const { title, funding, university, degree, subjects, country, description } = values;

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setValue({ ...values, title: value })
        formData.set("title", value)
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
           const res = await addProduct(formData)
        } catch (error: Error | any) {
            console.log(error.message)
        }
    }

    const handleImage = (image: any) => {
        formData.set("image", image)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <FileUpload handleImage={handleImage} />
                <Input
                    label="Enter Title"
                    required
                    name='title'
                    value={title}
                    placeholder='Enter Schalorship Title'
                    handleEvent={handleEvent}
                />
                {/* funding type */}
                <Select
                    formData={formData}
                    placeholder={funding}
                    setValue={setValue}
                    name={"funding"}
                />
                {/* university name */}
                <Select
                    formData={formData}
                    placeholder={university}
                    required
                    setValue={setValue}
                    name={"university"}
                />
                {/* degree name */}
                <Select
                    formData={formData}
                    placeholder={degree}
                    required
                    setValue={setValue}
                    name={"degree"}
                />
                {/* Select Subjects */}
                <MultiSelect
                    formData={formData}
                    placeholder={"Default *all subjects*"}
                    setValue={setValue}
                    name={"subjects"}
                    data={subjects}
                />
                {/* country name */}
                <Select
                    formData={formData}
                    placeholder={country}
                    required
                    setValue={setValue}
                    name={"country"}
                />
                <SelectDatePicker formData={formData} />
                <InputQuill
                    formData={formData}
                    value={description}
                    setValue={setValue}
                />

                <PrimaryButton text={"Submit"} className='w-full' />
            </form>
        </>
    )
}

export default AddProduct