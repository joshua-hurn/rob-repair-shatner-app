
import moviesQuery from "./moviesQuery";
const express = require('express')
const mysql = require('mysql')



export const Connection = mysql.createPool({
  host: 'localhost',
  port:3306,
  user:"shattner",
  password:"king64",
  database:"shattnerprod"
})
  

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  moviesQuery,
  Query,
};
