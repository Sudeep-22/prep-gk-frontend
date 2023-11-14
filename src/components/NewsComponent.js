import React from 'react'

const NewsComponent = (props) => {
    let {title,description,imageUrl,newsUrl,source,date} = props;
    return (
      <div>
        <div className="card my-4">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <footer className="blockquote-footer my-2 text-end">{source} on <cite title="Source Title">{date}</cite></footer>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
export default NewsComponent
