import React, { Component } from 'react'



const Newsitem = (props) => {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span className="badge rounde-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" : imageUrl} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="blank" class="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
