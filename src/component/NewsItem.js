import React from 'react'

 const NewsItem =(props) =>  {
 
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
    return (
      <div className="my-3">
        <div className="card" >

          <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{ right: '0%' }}>{source}</span>
          <img className="card-img-top" src={!imageUrl ? "https://c.ndtvimg.com/2022-08/9r6hhf9o_ganesh-chaturthi-celebrations-hubballi_650x400_31_August_22.jpg" : imageUrl} alt="" />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>

            <p className="card-text"><small className="text-info">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>

            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
