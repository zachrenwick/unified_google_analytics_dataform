[
  "ga_sessions_*"
].forEach((name) =>
  declare({
    database: "plenary-network-243016", //set your Google Analytics Universal Analytics database/dataset ID here
    schema: "141585386", //this is the Google Analytics UA master property view ID
    name,
  })
);
[
  "events_*"
].forEach((name) =>
  declare({
    database: "plenary-network-243016",//set your Google Analytics 4 database/dataset ID here
    schema: "analytics_307314851", //this is the Google Analytics 4 master property view ID
    name,
  })
);