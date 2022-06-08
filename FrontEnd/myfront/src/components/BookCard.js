import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }
  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8084/api/books/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }

  onDeleteClick(id) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("êtes vous sûre de vouloir supprimer")) {
      axios
        .delete("http://localhost:8084/api/books/" + id)
        .then((res) => {
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log("Error form ShowBookDetails_deleteClick");
        });
    }
  }

  render() {
    const book = this.state.book;
    return (
      <div className="card-container">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="desc">
          <h2>
            <Link to={`/show-book/${book._id}`}>{book.title}</Link>
          </h2>
          <h3>{book.author}</h3>
          <p>{book.description}</p>
          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, book._id)}
              >
                Delete Book
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
