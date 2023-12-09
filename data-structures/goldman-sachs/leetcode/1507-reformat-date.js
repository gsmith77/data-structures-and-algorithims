const months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

const getDay = (day) => {
  const d = day.slice(0, day.length - 2);
  const oneDigit = d.length == 1;
  let formattedDay = d;
  if (oneDigit) {
    formattedDay = `0${d}`;
  }
  return formattedDay;
};

// Level: Easy
/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = (date) => {
  if (!date || typeof date !== "string") {
    return date;
  }
  const splitDate = date.split(" ");
  const day = getDay(splitDate[0]);
  const month = months[splitDate[1]];
  const year = splitDate[2];
  return `${year}-${month}-${day}`;
};

// Test cases
const dates = ["20th Oct 2052", "6th Jun 1933", "26th May 1960"];
const expectedResult = ["2052-10-20", "1933-06-06", "1960-05-26"];
console.log("Running tests for 1507-reformat-date.js...");
dates.forEach((date, i) => {
  const result = reformatDate(date);
  if (result === expectedResult[i]) {
    console.log("Passed for input -", date);
  } else {
    console.log("Failed for input -", date);
  }
});
