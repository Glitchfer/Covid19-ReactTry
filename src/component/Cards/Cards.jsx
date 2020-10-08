import React from "react";
import style from "./Cards.module.css";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/CardComponent";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={style.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={style.confirmed}
          cardTitle="Kasus"
          value={confirmed.value}
          cardSubtitle="Jumlah angka kasus COVID-19"
        />
        <CardComponent
          className={style.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          cardSubtitle="Jumlah angka sembuh COVID-19"
        />
        <CardComponent
          className={style.deaths}
          cardTitle="Meninggal"
          value={deaths.value}
          cardSubtitle="Jumlah angka meninggal COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
