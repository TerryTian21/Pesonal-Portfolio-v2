import data from "../assets/data.json";

export function getMonthlyData(month, year) {
  // Make a SQL Query to return all workouts sessions within the month and year
  // Requires a backend API call to Azure server hosting SQL db
  return data;
}

export function storeData() {}
