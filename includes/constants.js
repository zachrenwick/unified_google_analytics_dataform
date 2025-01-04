/*
    Define relevant cutover and first date constants for this dataform project 
*/
const first_date_to_load_data = ["'2017-07-01'"]; // first date to load GA3/ GA Universal Analytics data
const ga4_cutover_date = ["'2022-01-01'"]; // first date to load GA4 data, prior day will be last day to load GA UA data
module.exports = {
    first_date_to_load_data,
    ga4_cutover_date
};


