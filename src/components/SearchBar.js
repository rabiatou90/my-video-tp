

import { useState } from "react";

function SearchBar(props) {
    const [term,setTerm] = useState('');

    const onChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit(term);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Video Search</label>
                    <br />
                    <input
                    className="form-control form-control-lg"
                    type="text"
                    value={term}
                    onChange={onChange} 
                    />
                </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;


