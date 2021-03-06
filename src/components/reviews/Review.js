import React, { Component } from 'react';

class Review extends Component {

  handleDelete = () =>{
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id,
      review: this.props.review
    });
  }

  render() {
    return (
      <li>{this.props.review.text} - <button onClick={this.handleDelete.bind(this)}>Delete</button></li>
    );
  }
};

export default Review;