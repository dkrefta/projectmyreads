import React from 'react'
import Book from './Book'

const BookShelf = ({ title, books, handleShelfChange }) => (
	<div className="bookshelf">
		<h2 className="bookshelf-title">{title}</h2>
		<div className="bookshelf-books">
			<ol className="books-grid">
				{books.map(book => (
					<li key={book.id}>
						<Book book={book} handleShelfChange={handleShelfChange} />
					</li>
				))}
			</ol>
		</div>
	</div>
)

BookShelf.defaultProps = {
	title: '',
	books: [],
}

export default BookShelf
