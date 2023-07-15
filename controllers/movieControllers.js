const URL = process.env.URL;
const APIkey = process.env.API_KEY;
const axios = require("axios");
const express = require("express");

const getAllMovies = async (req, res) => {
  try {
    const movies = await axios.get(`${URL}discover/movie?${APIkey}`);
    res.status(200).send(movies.data);
  } catch (err) {
    console.log(err);
  }
};

const getSingleMovie = async (req, res) => {
  const id = req.query.id;
  try {
    const movie = await axios.get(`${URL}movie/${id}?${APIkey}`);
    res.status(200).send(movie.data);
  } catch (err) {
    console.error(err);
  }
};

const getMovieCredits = async (req, res) => {
  const id = req.query.id;
  try {
    const credits = await axios.get(`${URL}movie/${id}/credits?${APIkey}`);
    res.status(200).send(credits.data);
  } catch (err) {
    console.error(err);
  }
};

const getPopularMovies = async (req, res) => {
  try {
    const popular = await axios.get(`${URL}movie/popular?${APIkey}`);
    res.status(200).send(popular.data);
  } catch (err) {
    console.error(err);
  }
};

const getTopRatedMovies = async (req, res) => {
  try {
    const topRated = await axios.get(`${URL}movie/top_rated?${APIkey}`);
    res.status(200).send(topRated.data);
  } catch (err) {
    console.error(err);
  }
};

const getUpComingMovies = async (req, res) => {
  try {
    const upComing = await axios.get(`${URL}movie/upcoming?${APIkey}`);
    res.status(200).send(upComing.data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllMovies,
  getSingleMovie,
  getMovieCredits,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
};
