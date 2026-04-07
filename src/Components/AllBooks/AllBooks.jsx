import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const boooksFeatch = fetch("/data/booksData.json")
    .then((res) => res.json())

const AllBooks = () => {

    const books = use(boooksFeatch);
    console.log(books)

    return (
        <div>
            <h2 className='text-center text-4xl font-bold'>Books</h2>
            <div className='grid grid-cols-3 mx-auto w-full max-w-[1200px] gap-4'>
                {
                    books.map(book => (
                        <div key={book.bookId}>
                            <BookCard book = {book}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllBooks;