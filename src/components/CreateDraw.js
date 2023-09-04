import React, { useState } from 'react';
import './CreateDraw.css';

const CreateDraw = () => {
    const [numGroups, setNumGroups] = useState('');
    const [assignedNumbers, setAssignedNumbers] = useState([]);

    const handleInputChange = (e) => {
        setNumGroups(e.target.value);
    };

    const getOrdinalNumber = (number) => {
        const suffixes = ['<sup>th</sup>', '<sup>st</sup>', '<sup>nd</sup>', '<sup>rd</sup>'];
        const lastDigit = number % 10;
        const lastTwoDigits = number % 100;

        return (
            number +
            suffixes[(lastDigit === 11 || lastDigit === 12 || lastDigit === 13) ? 0 : (lastDigit < 4) ? lastDigit : 0]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!numGroups || isNaN(numGroups) || numGroups <= 0) {
            alert('Please enter a valid number of groups greater than 0.');
            return;
        }

        // Create an array with unique random numbers
        const uniqueNumbers = [];
        while (uniqueNumbers.length < numGroups) {
            const randomNum = Math.floor(Math.random() * numGroups) + 1;
            if (!uniqueNumbers.includes(randomNum)) {
                uniqueNumbers.push(randomNum);
            }
        }

        setAssignedNumbers(uniqueNumbers);
    };

    return (
        <div className="create-draw-container">
            <h2>Create Lucky Draw</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numGroups">How many groups:</label>
                <input
                    type="number"
                    id="numGroups"
                    value={numGroups}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            {assignedNumbers.length > 0 && (
                <div>
                    <h3>Assigned Numbers:</h3>
                    <ul>
                        {assignedNumbers.map((number, index) => (
                            <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: `${getOrdinalNumber(index + 1)} → Group ${number}` }} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CreateDraw;
