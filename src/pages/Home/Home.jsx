import React from "react";
import axios from "axios";
import imageHead from "../../img/head_3.png";
import style from "../Home/Home.module.css";
import Typography from "@material-ui/core/Typography";
import PickCountry from "../../component/PickCountry/PickCountry";
import Cards from "../../component/Cards/Cards";

class Home extends React.Component {
  state = {
    name: "",
    data: {},
  };

  componentDidMount() {
    console.log("didMount is running");
    this.getData();
  }

  getData = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    // console.log(event.target.value);
    let country = event.target.value;
    this.getData(country);
    const setCountry = country ? country : "Global";
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  render() {
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    return (
      <div className={style.container}>
        <img className={style.img} src={imageHead} alt="" />
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Last Updated : {lastUpdate}
        </Typography>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;
