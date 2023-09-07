import React, { ChangeEvent, FormEvent } from 'react'
import Input from '@/components/input/input'

const AddProduct = () => {
    // const [value, setValues] = useState<{}>({
    //     image: "",
    //     title: "",
    //     highlight: "",
    //     description: "",
    //     country: "",
    //     funding: "",
    //     university: "",
    //     degree: "",
    //     subject: []
    // })

    async function create(formData: FormData) {
        'use server';
        console.log(formData)
    }
    // const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value
    // }

    return (
        <>
            <form action={create} className='space-y-6'>
                <Input
                    title="Enter Title"
                    required
                    name='title'
                    placeholder='Enter Schalorship Title'
                />
                   <Input
                    title="Enter Highlight"
                    required
                    name='highlight'
                    placeholder='Enter Highlight'
                />
                   <Input
                    title="Enter Description"
                    required
                    name='description'
                    placeholder='Enter Schalorship Description'
                />
                   <Input
                    title="Enter Country"
                    required
                    name='title'
                    placeholder='Enter Schalorship Title'
                />
                  <Input
                    title="Enter Funding Type"
                    required
                    name='funding'
                    placeholder='i.e Full Funding'
                />
                 <Input
                    title="Enter University"
                    required
                    name='university'
                    placeholder='unversity name'
                />
                 <Input
                    title="Enter Degree"
                    required
                    name='degree'
                    placeholder='degree type'
                />
                 <Input
                    title="Enter Subjects"
                    required
                    name='sunjects'
                    placeholder='Computer Science, Electrical'
                />

            </form>
        </>
    )
}

export default AddProduct