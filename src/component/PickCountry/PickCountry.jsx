import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, NativeSelect } from "@material-ui/core";
import style from "../../component/PickCountry/PickCountry.module.css";

const PickCountry = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);

  function getCountries() {
    axios
      .get("https://covid.mathdro.id/api/countries")
      .then((response) => {
        let { countries } = response.data;
        countries = countries.map((item) => item.name);
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <FormControl className={style.container}>
      <NativeSelect onChange={(event) => handleCountryChange(event)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default PickCountry;
