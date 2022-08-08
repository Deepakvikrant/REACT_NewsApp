import React from "react";

const NewsItems =(props)=> {
  
    let { title, description, imageUrl, newsUrl, date, author, sources } = props;

    return (
      <div className="container my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <br /><span className="badge bg-info text-dark">{sources}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By <b>{author ? author : "Unknown"}</b> on <b>{new Date(date).toGMTString()}</b> </small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItems
