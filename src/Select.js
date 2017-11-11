import React from 'react'

const Select = ({ handleChange, bookId, bookShelf }) => (
	<select onChange={handleChange.bind(this, bookId)}>
		<option value="none" disabled>
			Move to...
		</option>
		<option
			value="currentlyReading"
			selected={bookShelf === 'currentlyReading'}
		>
			Currently Reading
		</option>
		<option value="wantToRead" selected={bookShelf === 'wantToRead'}>
			Want to Read
		</option>
		<option value="read" selected={bookShelf === 'read'}>
			Read
		</option>
		<option value="none" selected={bookShelf === 'none'}>
			None
		</option>
	</select>
)

export default Select
