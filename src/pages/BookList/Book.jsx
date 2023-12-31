import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = './images/back.jpg' alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/1`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>hello ji</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>Hello</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>5</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>5</span>
        </div>
      </div>
    </div>
  )
}

export default Book