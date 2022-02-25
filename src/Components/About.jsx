import React from 'react';

const About = () => {
  return (
    <>
      <div className='container border-start border-dark my-5 offset-2'>
        <div className='row '>
          <div className='col-4'>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              rem?
            </p>
          </div>
          <div className='col-6'>
           <img style={{maxHeight : '300px'} } className='img-fluid' src={"https://images.unsplash.com/photo-1534945900825-63cc0b6dd7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"} alt="girl in field holding wild flowers" />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
           <img style={{maxHeight : '300px'} } className='img-fluid' src={"https://images.unsplash.com/photo-1600469802026-4358d4e89df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} alt="Man and Dog" />
          </div>
          <div className='col-4'>
            <h2>What We Do</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              rem?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
