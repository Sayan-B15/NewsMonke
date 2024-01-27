import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0
    };
    document.title = `${this.props.category} - NewsMonkey`;
  }

  async updateNews() {
    const url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&topic=${this.props.category}&token=b6070d187a661e6e71b9a28bd68fff84&max=${this.props.pageSize}&page=${this.state.page}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalArticles });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.updateNews();
      });
    }
  }

  handleNextClick = async () => {
    const { page, totalArticles } = this.state;
    const totalPages = Math.ceil(totalArticles / this.props.pageSize);
    if (page < totalPages) {
      this.setState({ page: page + 1 }, () => {
        this.updateNews();
      });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - One Stop destination for all types of news</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  author={element.source.name}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page * this.props.pageSize >= this.state.totalArticles} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
