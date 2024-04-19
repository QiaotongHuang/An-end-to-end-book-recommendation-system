import React, { useState } from 'react';
import './Rating.css';

function Rating() {
    const [userId, setUserId] = useState('');
    const [ISBN, setISBN] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:8000/${userId}/ratings/${ISBN}/${rating}`);
            if (response.ok) {
                setMessage('Rating submitted successfully!');
            } else {
                setMessage('Failed to submit rating.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to submit rating.');
        }
    };

    return (
        <div className="rating-container">
        <h2>Submit Rating</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="userId">User ID:</label>
                <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} required />
            </div>
            <div className="input-group">
                <label htmlFor="ISBN">ISBN:</label>
                <input type="text" id="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} required />
            </div>
            <div className="input-group">
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="10" required />
            </div>
            <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
    </div>
    );
}

export default Rating;
