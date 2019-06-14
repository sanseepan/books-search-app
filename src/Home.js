import React, { Component } from "react";
import Book from "./Book";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      books: []
    };
  }

  componentDidMount() {}

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
      .then(res => res.json())
      .then(data => this.setState({ books: data.items }));
  };

  render() {
    const books = this.state.books;

    return (
      <div>
        <form>
          <label>
            <span>Search </span>
            <input
              type="text"
              value={this.state.searchTerm}
              placeholder="search here"
              onChange={this.handleChange}
            />
          </label>
        </form>
        <hr />

        {books.map((book, id) => {
          return <Book key={book.key} book={book} />;
        })}
      </div>
    );
  }
}

export default Home;
