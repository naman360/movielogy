import React, { Component } from "react";
import { connect } from "react-redux";
import { requestData, requestTrending } from "../redux/movies/movieActions";
import { Button, TextField } from "@material-ui/core";
import GifLoader from "react-gif-loader";
import Card from "./Card";
import NetError from "../assets/net_error.svg";
import NoResult from "../assets/no-result.svg";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <div className="search">
          <TextField
            className="search__box"
            id="standard-search"
            label="Search Movies/TV here"
            type="search"
            onChange={(e) => this.setState({ searchVal: e.target.value })}
          />
          <Button
            onClick={() => this.props.requestData(this.state.searchVal)}
            className="search__btn"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>
        <div className="movies">
          {data.error.length > 0 ? (
            <div className="error">
              <img width="300" src={NetError} alt="" />
              <h1>Sorry! An error occured</h1>
            </div>
          ) : data.loading === false ? (
            data.searchRes.results.length > 0 ? (
              data.searchRes.results.map((ele) =>
                ele.poster_path ? (
                  <Card
                    image={ele.poster_path}
                    name={ele.title ? ele.title : ele.name}
                    id={ele.id}
                  />
                ) : (
                  ""
                )
              )
            ) : (
              <div className="error">
                <img width="300" src={NoResult} alt="" />
                <h1>No Results were found!</h1>
              </div>
            )
          ) : (
            <GifLoader
              loading={true}
              imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
              imageStyle={{ width: "300px" }}
              overlayBackground="rgba(0,0,0,0.1)"
            />
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.moviesData,
});
const mapDispatchToProps = (dispatch) => ({
  requestData: (e) => dispatch(requestData(e)),
  requestTrending: () => dispatch(requestTrending()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
