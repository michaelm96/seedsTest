const sql = require("../config/db.js");

// constructor
const Api = function(url) {
  this.endpoint = url.endpoint;
  this.params = url.params;
  this.datetime = url.datetime;
};

Api.create = (apiCall, result) => {
  sql.query(`INSERT INTO ${process.env.DBTABLE} SET ?`, apiCall, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created api call: ", { id: res.insertId, ...apiCall });
    result(null, { id: res.insertId, ...apiCall });

  });
};

module.exports = Api;