import React, { useState } from "react";

import "./index.scss";

export const SearchBar = props => {
    const [search, setSearch] = useState("");
    const { onSearch } = props;

    const onChangeHandler = event => {
        setSearch(event.target.value);
        event.target.value.length === 0 ? onSearch(undefined) : onSearch(event.target.value);
    };

    const onButtonClickHandler = () => {
        onSearch(search);
    };



    return (
        <>
            <div className="searchbar-container">
                <div className="search-bar">
                    <input placeholder="Search Pokemon" type="text" onChange={onChangeHandler} />
                    <button onClick={onButtonClickHandler}>Search</button>
                </div>
            </div>

        </>
    );
};
