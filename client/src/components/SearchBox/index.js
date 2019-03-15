import React from "react";

function SearchBox({ query, handleInputChange, handleFormSubmit }) {
    return (
        <div className="container">
            <div className="box">
                <form>
                    <div className="field is-clearfix">
                        <label className="label">Book Search</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Search for a book" 
                                name="searchQuery"
                                value={query}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button 
                            className="button is-primary is-pulled-right"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBox;