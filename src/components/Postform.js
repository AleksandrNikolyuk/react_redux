import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

    state = {
      title: '',
    };

  changeValue = (event) => {
    this.setState({ title: event.target.value });
  };

  submitValue = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
    }
    this.props.createPost(post);
  } 

  render() {
    const { changeValue, submitValue } = this;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={ submitValue }>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={ changeValue }
              value={this.state.title}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
