import React, { useState } from "react";



import './index.scss';


export const SearchBar = () => {
    const [search, setSearch] = useState('charmander')



    return (<>
        <div className="searchbar-container">
            <div className="search-bar">
                <input placeholder="Search Pokemon" type="text" value={search} onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }
                } />
                <button>Search</button>


            </div>
            {/* <button>Search</button> */}
        </div>
    </>)
        ;
}