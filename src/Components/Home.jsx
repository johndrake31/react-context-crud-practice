import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
const Home = () => {

    return ( 
    <>
        <div className={classes.mainDivBg + ' pt-3 m-0'}>
            <div className="row text-center">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt?</p>
            </div>
            <div className="row text-center">
                <h2>What we do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt?</p>
            </div>
            <div className='row rounded px-5 py-2'>
                <h3 className='text-center'>Find Out More</h3>

                <Link to='/about'  className="btn btn-primary mb-3">More</Link>
            </div>
        </div>
    </> 
    );
}
 
export default Home;