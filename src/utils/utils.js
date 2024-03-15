import { seatClassList } from "../constants/constants";

let formatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "Australia/Sydney",
};

export const DateFormatConverter = (
  date,
  locale = "en-In",
  options = formatOptions
) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const searchFlights = (flightList, searchKeys) => {
  const { source, destination, departureDate } = searchKeys;
  if (!source || !destination || !departureDate) return [];

  return flightList.filter((flight) => {
    const sourceMatch = flight.origin
      .toLowerCase()
      .includes(source.toLowerCase());
    const destinationMatch = flight.destination
      .toLowerCase()
      .includes(destination.toLowerCase());

    const formatOptions = {
      dateStyle: "short",
      timeZone: "Australia/Sydney",
    };

    const departureDateMatch =
      String(
        DateFormatConverter(flight?.departureTime, "en-GB", formatOptions)
      ) === String(DateFormatConverter(departureDate, "en-GB", formatOptions));

    return sourceMatch && destinationMatch && departureDateMatch;
  });
};

// Define filter criteria
export const filters = {
  airline: (flight, value) =>
    value
      .map((item) => item?.value?.toLowerCase())
      .includes(flight.airline.toLowerCase()),
  seatClass: (flight, value) =>
    flight?.seatClass?.toLowerCase().includes(value.toLowerCase()),
};

export const filterFlights = (flightList, criteria) => {
  return flightList?.filter((flight) => {
    for (let key in criteria) {
      if (!criteria[key] || !criteria[key]?.length) continue;
      if (key == "seatClass" && criteria[key] == "all") continue;

      if (!filters[key](flight, criteria[key])) {
        return false; // User does not match this criteria
      }
    }
    return true; // User matches all criteria
  });
};

export const addSeatClassInResponse = (flightList) => {
  return flightList.map((flight) => ({
    ...flight,
    seatClass: seatClassList[Math.floor(Math.random() * 4)],
  }));
};

export const sortFlights = (flightList, { value: order }) => {
  return [...flightList].sort(({ price: price1 }, { price: price2 }) => {
    if (order == "ascending") {
      return price1 - price2;
    } else {
      return price2 - price1;
    }
  });
};
