[
  "ga_sessions_*"
].forEach((name) =>
  declare({
    database: "aritzia-ga", //set your Google Analytics Universal Analytics database/dataset ID here
    schema: "141585386", //this is the Google Analytics UA master property view ID
    name,
  })
);
[
  "events_*"
].forEach((name) =>
  declare({
    database: "atz-data-ingest-prd",//set your Google Analytics 4 database/dataset ID here
    schema: "analytics_352999334", //this is the Google Analytics 4 master property view ID
    name,
  })
);