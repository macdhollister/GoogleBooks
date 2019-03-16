import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import ResultsBox from "../components/ResultsBox";

class Saved extends Component {
    state = {
        books: [],
        searchQuery: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {

    };
    
    handleFormSubmit = event => {

    };
    
    handleBookSave = id => {

    };
    
    render() {
        return(
            <Fragment>
                <Navbar />
                <Banner />
                <ResultsBox
                    title="Saved Books"
                >
                    <Book 
                        title="Test Book"
                        authors={["author1", "author2", "author3"]}
                        description="This book should appear when the books array is empty -- remove this later and replace with some sort of message to the user"
                        image="https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/quick-and-simple-image-placeholders/bcohuFwnmPgIu4aM56YZudq12m02"
                    />
                </ResultsBox>
            </Fragment>
        );
    }
}

export default Saved;