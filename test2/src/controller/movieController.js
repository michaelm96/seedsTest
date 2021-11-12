const Api = require("../model/api.model.js");
const fetch = require("node-fetch");

class MovieController {
  static async home(req, res) {
    try {
      const apiCall = new Api({
        endpoint: req.url,
        params: req.query ? new URLSearchParams(req.query).toString() : null,
        datetime: new Date(),
      });

      Api.create(apiCall, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the api call log.",
          });
      });

      return res.send(
        "<h1>Welcome to OMDB lite version</h1> <br/> want to search? add this ( /search?title={title you looking for}) to url,<br/> want detail of the movie? add this ( /detail?title={title you looking for}) to url"
      );
    } catch (error) {
      console.log(error, "error");
    }
  }

  static async search(req, res) {
    try {
      if (!req.query.title) {
        return res.status(400).json({
          message: "please insert the title",
        });
      }

      let movie = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${req.query.title}&page=${req.query.page}`,
        { method: "GET" }
      ).then((res) => res.json());

      const apiCall = new Api({
        endpoint: "/search",
        params: req.query ? new URLSearchParams(req.query).toString() : null,
        datetime: new Date(),
      });

      Api.create(apiCall, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the api call log.",
          });
      });

      if (movie.Response === "False") {
        return res.status(400).json({
          message: movie.Error,
          response: [],
        });
      }

      return res.status(200).json({
        message: "Success retrieve data",
        response: movie["Search"],
      });
    } catch (error) {
      console.log(error, "error");
    }
  }

  static async detail(req, res) {
    try {
      if (!req.query.title) {
        return res.status(400).json({
          message: "please insert the title",
        });
      }

      let movie = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&t=${req.query.title}`,
        { method: "GET" }
      ).then((res) => res.json());

      const apiCall = new Api({
        endpoint: "/detail",
        params: req.query ? new URLSearchParams(req.query).toString() : null,
        datetime: new Date(),
      });

      Api.create(apiCall, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the api call log.",
          });
        else console.log(data);
      });

      if (movie.Response === "False") {
        return res.status(400).json({
          message: movie.Error,
          response: [],
        });
      }

      return res.status(200).json({
        message: "Success retrieve detail",
        response: movie,
      });
    } catch (error) {
      console.log(error, "error");
    }
  }

  static async notFound(req, res) {
    try {
      const apiCall = new Api({
        endpoint: req.url,
        params: req.query ? new URLSearchParams(req.query).toString() : null,
        datetime: new Date(),
      });

      Api.create(apiCall, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the api call log.",
          });
      });

      return res.status(404).send("<h1>Page Not Found</h1>");
    } catch (error) {
      console.log(error, "error");
    }
  }
}

module.exports = MovieController;
