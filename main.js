#!/usr/bin/env node
var stringify = require('csv-stringify');
var data = require('./data/input/trello-board-export.json');
var fs = require('fs');

var parsedData = []
data.cards.forEach((c) => {
  var labelary = [];
  c.labels.forEach((l) => {
    labelary.push(l.name);
  });
  parsedData.push({name: c.name, description: c.desc, due: c.due, labels: labelary.join(',')});
});

stringify(parsedData,{ quoted: true, quoted_empty: true }, function(err, output){
  fs.writeFile("./data/output/output.csv", output);
});

