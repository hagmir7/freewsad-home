import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../api'

const UpdateBook = ({ bookId }) => {
    const [book, setBook] = useState({
        name: '',
        image: '',
        description: '',
        tags: '',
        file: '',
        language: '',
        list: '',
        author: '',
        category: ''
    });

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await axios.get(`/api/books/${bookId}/`);
            const bookData = response.data;
            setBook(bookData);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.put(`/api/book/${bookId}/`, book);
            console.log('Book updated successfully');
            // Handle success, redirect or show a success message
        } catch (error) {
            console.error('Error updating book:', error);
            // Handle error, show an error message
        }
    };

    return (
        <div>
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={book.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" name="image" value={book.image} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={book.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="text" name="tags" value={book.tags} onChange={handleChange} />
                </div>
                <div>
                    <label>File:</label>
                    <input type="text" name="file" value={book.file} onChange={handleChange} />
                </div>
                <div>
                    <label>Language:</label>
                    <input type="text" name="language" value={book.language} onChange={handleChange} />
                </div>
                <div>
                    <label>List:</label>
                    <input type="text" name="list" value={book.list} onChange={handleChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={book.author} onChange={handleChange} />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={book.category} onChange={handleChange} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateBook;
