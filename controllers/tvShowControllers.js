const URL = process.env.URL;
const APIkey = process.env.API_KEY;
const express = require("express");
const axios = require("axios");

const getAllTvShows = async (req, res) => {
  try {
    const tvShows = await axios.get(`${URL}dicover/tv?${APIkey}`);
    res.status(200).send(tvShows.data);
  } catch (err) {
    console.error(err);
  }
};

const getTvShow = async (req, res) => {
  const id = req.query.id;
  try {
    const tvShow = await axios.get(`${URL}tv/${id}?${APIkey}`);
    res.status(200).send(tvShow.data);
  } catch (err) {
    console.error(err);
  }
};

const getTvShowsCredits = async (req, res) => {
  const id = req.query.id;
  try {
    // const credits = await axios.get(`${URL}tv/${id}/credits?${APIkey}`);
    const credits = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?${APIkey}`
    );
    res.status(200).send(credits.data);
  } catch (err) {
    console.error(err);
  }
};

const getPopularTvShows = async (req, res) => {
  try {
    const popular = await axios.get(`${URL}tv/popular?${APIkey}`);
    res.status(200).send(popular.data);
  } catch (err) {
    console.error(err);
  }
};

const getTopRatedTvShows = async (req, res) => {
  try {
    const topRated = await axios.get(`${URL}tv/top_rated?${APIkey}`);
    res.status(200).send(topRated.data);
  } catch (err) {
    console.error(err);
  }
};

const getDiscoverTvShows = async (req, res) => {
  try {
    const discover = await axios.get(`${URL}discover/tv?${APIkey}`);
    res.status(200).send(discover.data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllTvShows,
  getTvShow,
  getTvShowsCredits,
  getPopularTvShows,
  getTopRatedTvShows,
  getDiscoverTvShows,
};
