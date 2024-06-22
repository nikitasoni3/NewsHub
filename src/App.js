import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 12;
  country = "in";
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/politics">
              <News
                setProgress={this.setProgress}
                key="politics"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="politics"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="technology"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
