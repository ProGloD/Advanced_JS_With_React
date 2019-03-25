const axios = require("axios");

axios.get("https://ghibliapi.herokuapp.com/films").then(response => {
  console.log(
    response.data
      .map(film => film.title)
      .filter(title => title.toLowerCase().includes("castle"))
  );

  console.log(
    response.data.reduce((acc, cur) => {
      acc[cur.release_date]
        ? acc[cur.release_date]++
        : (acc[cur.release_date] = 1);
         
      return acc;
    }, {})
  );
});
