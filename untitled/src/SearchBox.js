import React,{ Component}  from 'react'
import CardList from "./CardList";

const SearchBox=({ searchField,onSearch})=>{
    return(
        <div className="pa2">
            <input className=' pa3 ba b--green bg-light-blue ' type="search" placeholder="Searchs Robots" onChange={onSearch}/>

        </div>
    );
}

export default SearchBox;