import React, {useEffect, useState} from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from "react-router-dom";
import NewsNav from './NewsNav';


const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [noOfItems,setNoOfItems] = useState(0)
  let Navigate = useNavigate();

    const updateNews = async() => {
      props.setProgress(10);
      setLoading(true)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(60);
      setArticles(parsedData.articles)
      setLoading(false)
      setNoOfItems(parsedData.totalResults)
      props.setProgress(100);
    }
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(!token){
        Navigate("/login");
      }
      updateNews();
    },[]) 
    // handlePrevButton =  async() => {
    //   setState({page : state.page - 1});
    //   updateNews();
    // }
    // handleNextButton =  async() => {
    //   setState({page : state.page + 1});
    //   updateNews();
    // }
    const fetchMoreData = async() => {
      const nextPage = page + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setPage(nextPage)
      setNoOfItems(parsedData.totalResults)
    };
    return (
      <>
      <NewsNav category={props.category}/>
      <InfiniteScroll
          style={{ overflow: 'hidden',height: "100%"}}
          overflow="auto"
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={noOfItems>page*props.pageSize}
          loader={<Spinner/>}
          scrollableTarget="scrollableDiv"
        >
          <h1 className="text-center my-3">GK-Prep - Top {props.category} headlines</h1>            
          {loading && <Spinner/>}
            <div className="container">
            <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} newsUrl={element.url} source={element.source.name} date={element.publishedAt.slice(0,10)}/> 
                      </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-evenly">
            <button disabled={state.page<=1} type="button" class="btn btn-dark" onClick={handlePrevButton}>&larr; Previous</button>
            <button disabled={state.noOfItems<state.page*props.pageSize}type="button" class="btn btn-dark" onClick={handleNextButton}>Next &rarr;</button>
          </div> */}
          </>
    )
  }
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

News.defaultProps ={
  country : "in",
  pageSize : 9,
  category : "general"
}

export default News
