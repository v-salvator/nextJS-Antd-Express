import React, { Component } from "react";
import Layout from "../components/MyLayout.js";

class Hehe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log("hehe did mount????");
    this.setState({
      count: this.props.shows.length
    });
  }
  render() {
    return (
      <Layout>
        <div>heheh</div>
        <div>{this.state.count}</div>
      </Layout>
    );
  }
}

Hehe.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data in hehe fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Hehe;
