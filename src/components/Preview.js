import axios from "axios";
import moment from "moment";
import React, { Component } from "react";

export class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = { details: "" };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=f83b662ea52b74d3700e9c84e6ef28ff`
      )
      .then((res) => {
        this.setState({ details: res.data });
      });
  }
  render() {
    const { details } = this.state;
    return (
      <>
        {details.id ? (
          <div className="preview">
            <div className="preview__container">
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt=""
              />
              <div className="info_one">
                <h1>{details.name ? details.name : details.title}</h1>
                <h2>{details.tagline}</h2>
                <h2>
                  Type:{" "}
                  {details.media_type === "movie" ? "Movie" : "T.V Series"}
                </h2>
                <h2>
                  Release Date:{" "}
                  {moment(details.release_date).format("D MMM YYYY")}
                </h2>
                <h2>Runtime: {details.runtime} minutes</h2>
                <h2>Popularity: {details.popularity}</h2>
                <h2>Vote Count: {details.vote_count}</h2>
                <h2>Popularity: {details.vote_average}</h2>
                <p>{details.overview}</p>

                <a href={details.homepage} className="goto-btn">
                  Go to website
                </a>

                <div className="categories">
                  {details.genres.map((ele) => (
                    <span className="category-pill">{ele.name}</span>
                  ))}
                </div>
              </div>

              <div className="info_one">
                <h1>
                  {details.production_companies.length > 0
                    ? "Production Companies --"
                    : ""}
                </h1>
                <ul>
                  {details.production_companies.map((ele) => (
                    <li>
                      {ele.logo_path === undefined ? (
                        ""
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${ele.logo_path}`}
                          alt=""
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Preview;
