import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://laptop-parts-source-server-side.up.railway.app/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast.success(' successfully!!!');
            })

    };
    return (
        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-2xl mb-2 '> Please Add Review</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("Review", { required: true })} placeholder="Review" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("Ratings", { required: true })} placeholder="Available Quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("img", { required: true })} placeholder="Photo URL" required />
                </Form.Group>

                <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddReview;