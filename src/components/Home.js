import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Home.css'; // Import the CSS file
import luckyDrawImage from '../assets/lucky-draw-image.jpg';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Lucky Draw App</h1>
            <p>
                Get ready for some fun and excitement!
            </p>

            <div className="action-buttons">
                <Link to="/create">
                    <button>Create a Lucky Draw</button>
                </Link>
            </div>

            <div className="preview">

                {/* You can describe the project here */}
                <p>
                    This project allows you to create and participate in exciting lucky
                    draws. Simply create a new draw and watch
                    your luck unfold!
                </p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;
