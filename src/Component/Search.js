import React from 'react'
import '../Style/Search.css'

function Search() {
    return (
        <div>
            <form action="" className="search-bar">
                <input type="search" name="search" required autocomplete="off"/>
                <button className="search-button" type="submit">
                    <span>Search</span>
                </button>
            </form>
        </div>
    )
}

export default Search
