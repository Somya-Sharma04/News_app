import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, ImageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left: '88%', zIndex: '1'}}>
                {source}
        </span>
          <img
            src={ImageUrl}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://images.moneycontrol.com/static-mcnews/2023/01/FMCG1-770x433.png";
            }}
            className="card-img-top"
            alt="Not found"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}..
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem