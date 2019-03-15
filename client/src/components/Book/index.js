import React from "react";

function Book({ title, authors, description, image, link }) {
    return (
        <div className="box">
            <div className="field">
                <button className="button is-primary is-pulled-right">View</button>
                <button className="button is-primary is-pulled-right">Save</button>
                <label className="label">{title}</label>
                <h2>By: {authors.join(", ")}</h2>
                <div className="columns">
                    <div className="column is-one-third">
                        <img src={image} alt="Book cover" />
                    </div>

                    <div className="column">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;