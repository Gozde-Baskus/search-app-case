

import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchInput = ( { onChange, value }) => {
    return (
        <div className="searchInput">
            <FaSearch className='searchInput-icon' color='white' size={20} />            
            <input
                type="text"
                placeholder="SEARCH (Client Name / Police Number)"
                onChange={onChange}
                value={value}
                className="searchInput-input"
            />
        </div>
    );
}



export default SearchInput;