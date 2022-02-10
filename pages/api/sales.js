import { orders, revenueThisWeek } from "../../data/data";
import { format, parse } from "date-fns";

const handler = (req, res) => {
  const arr = []; // Create an empty array
  let firstItem = orders[0];

  // Loop the orders array because it only has one item and let us make a new array
  for (var key in firstItem) {
    if (firstItem.hasOwnProperty(key)) {
      arr.push({ state: key, total: firstItem[key] }); // Add this to the empty array until the loop ends
    }
  }
  // The array is fixed and the front end can just fetch the array with no problem

  // Format dates
  const dates = revenueThisWeek.labels;
  const formattedDates = dates.map((date) =>
    format(parse(date.replace("/", "-"), "dd-mm", new Date()), "E")
    // 1. parsed date to become a new valid date.
    // 2. format it using date fns and display only the day of the week. Example: Mon, Tue, Wed, etc.
  );

  res.status(200).json({
    orders: arr,
    revenueThisWeek: {
      labels: formattedDates,
      datasets: revenueThisWeek.datasets,
    },
  });
};

export default handler;
