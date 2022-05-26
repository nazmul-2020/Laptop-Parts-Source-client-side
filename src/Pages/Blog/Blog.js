import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div className='w-full'>
            <div className='container  mt-3 '>
                <h1 className='text-center text-success text-4xl'> Blog</h1>
                <div className='row g-4 mt-4' >
                <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <h3 className='text-xl'>What is a unit test? Why should write unit tests?</h3>
                        <hr />
                        <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.</p>
                        <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <h3 className='text-xl'> What are the different ways to manage a state in a React application?</h3>
                        <hr />
                        <p>Five types of state in react application. Now I discuss right now location state. Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>

                        <p>Unlike Data and Communication state, which follow a particular pattern or a shape to store information, location state instead stores information in a simple string like structure. However, one of the most interesting things about location states is that it typically stores URLs in the forms of string-like structures even when they don’t actually represent strings.</p>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <h3 className='text-xl'> How does prototypical inheritance work?</h3>
                        <hr />
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the (Prototype) of an object, we use Object. getPrototypeOf and Object.
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <h3 className='text-xl'> Why you do not set the state directly in React?</h3>
                        <hr />
                        <p> One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                    </div>
                    
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <h3 className='text-xl'>How will you improve the performance of a React Application?</h3>
                        <hr />

                        <p className='text-justify'>React Application isn't a rocket science. Before starting programming hero course. I have no idea about the react application programming. But not like that I have 0 knowledge about programming. I know programming is so tough job. But I have beleve about myself and I have a minset to work hard. I think for improve in any programming need to hard working. There is no shortcart.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;