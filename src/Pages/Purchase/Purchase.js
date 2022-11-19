import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useBuyDetails from '../../hooks/useBuyDetails';

const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [product] = useBuyDetails(id);
    // console.log(product)
    const [user] = useAuthState(auth);
    const { _id } = product;

    // const onSubmit = data => {
    //     console.log(data)

    const handleOrderSubmit = event => {
        event.preventDefault()

        const order = {
            // name: user.displayName,
            productId: _id,
            // tool: name,
            name: user.displayName,
            email: user.email,
            
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }
        console.log(user.email);

        if (product.minimumOrderQuantity > event.target.quantity.value) {
            alert(`You have to purchase at list ${product.minimumOrderQuantity} products`)
        }

        if (product.availableQuantity < event.target.quantity.value) {
            alert(`We have available ${product.availableQuantity} products`)
        }


        fetch('https://damp-falls-64903.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('Your order is complete')
                    event.target.reset()
                }
            })
    }

    return (
        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-2xl mb-2 '> Please Add Product</h3>
            <Form onSubmit={handleOrderSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" disabled value={user?.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="email"disabled value={user?.email} {...register("email", { required: true })} placeholder="Email address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number"defaultValue={product.price} {...register("price",  { required: true })} placeholder="Price" required />
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
                <Button className='w-75 mx-auto  d-block' variant="primary"value="Place an Order" type="submit">
                    Buy Now
                </Button>

            </Form>
        </div>
    );
};

export default Purchase;