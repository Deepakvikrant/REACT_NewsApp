import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "all",
    pageSize: 5,
    category: "genral",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNow() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e271ebb3e824002b7196a000a5702d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

  }

  async componentDidMount() {
    this.updateNow()
  }


  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page - 1 })
    this.updateNow()
  };

  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 })
    this.updateNow()
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px" }}>
          Todys!Updates :- Headlines of the day!{" "}
        </h1>
        {this.state.loading && <Spinner />}
        {/* {this.state.articles.map((element)=>{console.log(element);})} */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.urlToImage}>
                <NewsItems
                  title={element.title ? element.title : "Title not Avilable"}
                  discription={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.hindustantimes.com/tech/img/2022/07/28/1600x900/jpegPIA25017_(1)_1658994714280_1659008302741_1659008302741.jpg"
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  sources={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.setState.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
