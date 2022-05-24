import React from "react";

const Contact = () => {
    return (
        <div>
            <div className='bg-slate-300 px-10 py-5 '>
                <div className='text-center pb-14 '>

                    <h1 className='text-4xl'>Contact Us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">submit</button>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Contact;