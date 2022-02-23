import React from 'react'
import "./SearchConfirm.css"

const SearchConfirm = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="inputsearch input-group mb-2 mt-2">
            <input type="text" className="form-control" placeholder="Search..." value={value}
                onChange={(event) => { onValueChange(event.target.value) }} />
        </div>

    )
}

export default SearchConfirm;