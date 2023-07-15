const express = require("express");
const axios = require("axios");
const URL = process.env.URL;
const APIkey = process.env.API_KEY;
const TOKEN = process.env.TOKEN;

const getMovies = async (req, res) => {
  const search = req.query.search;
  try {
    const searched = await axios
      .get(`${URL}search/movie?${APIkey}&query=${search}`)
      .then((res) => res.data);
    res.status(200).send(searched);
  } catch (err) {
    console.error(err);
  }
};

const getTvShows = async (req, res) => {
  const search = req.query.search;

  

  const options = {
    method: "GET",
    url: `${URL}search/tv`,
    params: {
      query: `${search}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: TOKEN,
    },
  };

  try {
    const searched = await axios.request(options).then((res) => res.data);
    res.status(200).send(searched);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getMovies,
  getTvShows,
};
