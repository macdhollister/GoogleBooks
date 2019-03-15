import React, { Component } from "react";
import Banner from "../components/Banner";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import ResultsBox from "../components/ResultsBox";
import SearchBox from "../components/SearchBox";

class Home extends Component {
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
            <div>
                <Navbar />
                <Banner />
                <SearchBox 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    query={this.state.query}
                />
                <ResultsBox
                    title="Results"
                >
                    <Book 
                        title="Test Book"
                        authors={["author1", "author2", "author3"]}
                        description="This book should appear when the books array is empty -- remove this later and replace with some sort of message to the user"
                        image="https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/quick-and-simple-image-placeholders/bcohuFwnmPgIu4aM56YZudq12m02"
                    />
                </ResultsBox>
            </div>
        );
    }
}

export default Home;