import React,  { useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const News =(props) =>  {
    
  const[articles,setArticles] =useState([])
  const[loading,setLoading] =useState(true)
  const[page,setPage] =useState(1)
  const[totalResults,setTotalResults] =useState(0)
 




  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setLoading({ loading: true });
    setArticles(articles.concat(parseData.articles)) 
      setTotalResults(parseData.totalResults)
  }
  const capitalizeFirstLetter = (string) => {
    return string && string.charAt(0).toUpperCase() + string.substring(1);
};
  

 const updateNews= async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    props.setProgress(50);
    setLoading(false)
   props.setProgress(100);
  }
  useEffect(()=> {
    document.title=`${capitalizeFirstLetter(props.category)}-Chatpati Khabre`;
   updateNews();
  
 },[])
 const handelNextFn = async () => {
  setPage(page+1);
  updateNews();
  }
  const handelPrevFn = async () => {
   setPage(page-1);
    updateNews();
  }
 
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: '30px' }}> Chatpati Khabre- Top {capitalizeFirstLetter(props.category)} Hedline</h1>
          {loading && < Spinner />}

          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader=<Spinner />
        >
       <div className="container">
          <div className="row">
          
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} source={element.source.name} publishedAt={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
          <div className="container d-flex justify-content-between">
            <button className="btn btn-dark" disabled={page <= 1} onClick={handelPrevFn}> &larr;Pervious</button>
            <button className="btn btn-dark" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handelNextFn}>Next &rarr;</button>

          </div>
        </div>

      </>

    )
  
          }
        

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  totalResults:0
}
News.propsType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
