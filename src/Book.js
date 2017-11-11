import React from 'react'
import Select from './Select'

const Book = ({ book, handleShelfChange }) => (
	<div className="book">
		<div className="book-top">
			<div
				className="book-cover"
				style={{
					width: 128,
					height: 192,
					backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
				}}
			/>
			<div className="book-shelf-changer">
				<Select
					handleChange={handleShelfChange}
					bookId={book.id}
					bookShelf={book.shelf}
				/>
			</div>
		</div>
		<div className="book-title">{book.title}</div>
		<ul className="book-authors">
			{book.authors.map(author => <li key={author}>{author}</li>)}
		</ul>
	</div>
)

export default Book
