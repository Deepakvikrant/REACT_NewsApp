import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, date, author, chenal } = this.props;

    return (
      <div className="container my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <br /><span className="badge bg-info text-dark">{chenal}</span></h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-muted"> By <b>{author? author:"Unknown"}</b> on <b>{new Date(date).toGMTString()}</b> </small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
