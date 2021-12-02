const sql = require("../config/db.js");

// constructor
const Api = function (url) {
  this.endpoint = url.endpoint;
  this.params = url.params;
  this.datetime = url.datetime;
};

Api.create = async (apiCall, result) => {
  try {
    let res = await sql.query(
      `INSERT INTO ${process.env.DBTABLE} SET ?`,
      apiCall
    );
    await sql.end();
    console.log("created api call: ", { id: res.insertId, ...apiCall });
    return result(null, { id: res.insertId, ...apiCall });
  } catch (error) {
    console.log("error: ", err);
    return result(err, null);
  }
};

module.exports = Api;
