import React from "react";

function ResultsBox({ title, children }) {
    return (
        <div className="container">
            <div className="box">
                <div className="field">
                    <label className="label">{title}</label>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ResultsBox;