import React  from "react";


const Filter = ({value, onChangeFilter}) => {
    return (
        <>
            filter shown with
            <input value={value} onChange={onChangeFilter}/>
        </>
    )
}

export default Filter;