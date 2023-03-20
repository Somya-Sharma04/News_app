import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {

  const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

  const updateNews = async()=>{
    props.setprogress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setprogress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setprogress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setprogress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const HandleNextClick = async () => {
    setPage(page+1);
    updateNews();
  };


  const HandlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }


    return (
      <>
        <h1 className="text-center" style = {{margin : '35px 0px', marginTop : '70px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines!</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    ImageUrl={
                      element.urlToImage || 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier'
                    }
                    newsUrl={element.url}
                    author = {element.author?element.author:"Unknown"}
                    date = {element.publishedAt}
                    source = {element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.HandlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
            type="button"
            className="btn btn-dark"
            onClick={this.HandleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }

export default News 

News.defaultProps = {
  country : 'in',
  pageSize : '8',
  category : 'general'
} 

News.propTypes = {
  country : propTypes.string,
  pageSize : propTypes.number,
  category : propTypes.string
} 
