import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='tc f3 pa3 bg-light-purple'
				type='search'
				placeholder='Find Your Robot'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
