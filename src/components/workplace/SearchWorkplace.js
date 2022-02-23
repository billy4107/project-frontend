import React from 'react';
import "./SearchWorkplace.css";

const SearchWorkplace = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="inputsearch input-group mb-2 mt-2">
            <input type="text" className="form-control" placeholder="Search..." value={value}
                onChange={(event) => { onValueChange(event.target.value) }} />
            {/* <button type="button" className="btn btn-primary">Search</button> */}
        </div>

    )
}

export default SearchWorkplace
