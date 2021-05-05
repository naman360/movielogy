import React from "react";
import Home from "./Home";
import "../styles/App.scss";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import Preview from "./Preview";
import { requestTrending } from "../redux/movies/movieActions";
import Header from "./Header";

class App extends React.Component {
  componentDidMount() {
    this.props.requestTrending();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/entry/:id" component={Preview} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.moviesData,
});
const mapDispatchToProps = (dispatch) => ({
  requestTrending: () => dispatch(requestTrending()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
