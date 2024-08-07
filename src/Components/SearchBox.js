import React from "react";


const SearchBox = ({searchfield, searchChange}) => {

    return (
        <div className="pa2">
        <input
        className="pa3 ba b--greeen bg-lightest-blue" 
        type='search' 
        placeholder='search monsters'
        onChange={searchChange}
        />
        </div>

    );

}


export default SearchBox;