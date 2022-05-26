import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)


    };

    return (
        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-2xl mb-2 '> Please Add Product</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="email" {...register("email", { required: true })} placeholder="Email address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("price", { required: true })} placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("Quantity", { required: true })} placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("Phone", { required: true })} placeholder="Phone Number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("address", { required: true })} placeholder="Address" required />
                </Form.Group>
                <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default Purchase;