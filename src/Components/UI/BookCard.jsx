import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className='p-6'>
                                    <img className='h-[300px] rounded-xl'
                                        src={book.image}
                                        alt={book.title} />
                                </figure>
                                <div className="card-body">
                                        <div className='flex gap-2'>
                                            {
                                            book.tags.map((tag, index) => (
                                                <div key={index} className="badge badge-secondary">{tag}</div>
                                            ))
                                        }
                                        </div>

                                    <h2 className="card-title">
                                        {book.bookName}
                                    </h2>
                                    <p>by: {book.author}</p>
                                    <p>{book.description}</p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">{book.category}</div>
                                        <div className="badge badge-outline">{book.rating}</div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default BookCard;