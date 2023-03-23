import React from 'react';
import TableItem from './TableItem';

const SearchResults = ({ results, isEmpty, isLoading }) => {

    const renderInfo = () => {
        return <tr key="info">
            <td>
                <div className="searchResult-info">
                    {isLoading ?
                        "Loading..." : isEmpty ?
                            "There are no results" :
                            "Please type minimum 2 characters to search"
                    }
                </div>
            </td>
        </tr>
    }

    const hasResults = results.length > 0 && !isEmpty;

    return <div className='searchResult'>
        <table className="searchResult-table">
            <tbody>
                {!hasResults ? renderInfo() : results.map((result) => (
                    <tr key={result.id}>
                        <td><TableItem value={result} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>


}

export default SearchResults;
