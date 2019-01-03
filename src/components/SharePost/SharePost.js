import axios from 'axios';
import React, { Component } from 'react';

import './SharePost.css';

import TopBar from '../TopBar/TopBar';

class SharePost extends Component {
  state = {
    error: false,
    errorMessage: '',
    submitting: false,
    success: false
  }

  submitPost = (e) => {
    e.preventDefault();

    if (!this.state.submitting) {
      const name = this.nameRef.value;
      const email = this.emailRef.value;
      const message = this.messageRef.value;

      if (!message || message.length < 1) {
        this.setState({
          error: true,
          errorMessage: 'Please enter a message to send.',
          success: false
        });
        return;
      }

      if (!name || name.length < 1) {
        this.setState({
          error: true,
          errorMessage: 'Please add your name with the message.',
          success: false
        });
        return;
      }

      this.setState({
        error: false,
        submitting: true,
        success: false
      });

      const form = document.querySelector('form');

      axios.post('http://formspree.io/rhysh@live.com', {
        data: {
          name: name,
          email: email,
          message: message
        }
      })
      .then((response) => {
        console.log(response);
        form.reset();
        this.setState({
          error: false,
          submitting: false,
          success: true
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          errorMessage: 'Error sending your message. Please refresh and try again. If this problem persists please email Rhys directly at rhysh@live.com',
          submitting: false,
          success: false
        });
      });
    }
  }

  render() {
    const {
      error,
      errorMessage,
      submitting,
      success
    } = this.state;

    return (
      <div className="home">
        <TopBar />
        <div className="g">
          <div className="u-6-24" />
          <div className="u-12-24">
            <form
              className="share-post"
              onSubmit={this.submitPost}
            >
              <div className="share-post-description">
                Write a message to the family.
              </div>
              <textarea
                className="share-post-text"
                placeholder="Type your message here."
                ref={(input) => this.messageRef = input}
                type="textarea"
              />
              <input
                className="share-post-author"
                ref={(input) => this.nameRef = input}
                placeholder="Name"
              />
              <input
                className="share-post-email"
                placeholder="Email (Optional)"
                ref={(input)=> this.emailRef = input}
                type="email"
              />
              <br />
              <button
                className={'share-post-submit-button' + (submitting ? ' share-post-submit-button-is-submitting' : '')}
              >{submitting ? 'Sending...' : 'Send ✉️'}</button>
              <br />
              {error && <div className="share-post-status share-post-error">{errorMessage}</div>}
              {submitting && <div className="share-post-status share-post-submitting">Sending...</div>}
              {success && <div className="share-post-status share-post-success">Success. Your message was sent.</div>}
              <div
                className="share-post-extra"
              >
                If you would like to send a traditional email or attach a photo please email <span className="text-bold">amyatitus@yahoo.com</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SharePost;
