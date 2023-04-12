const API__KEY = "536e89250168bca468a5d37d75a8a76a";
const BASE__URL = "https://api.themoviedb.org/3";
const BG__URL = "https://image.tmdb.org/t/p/original/";

let elTemplate = elSelector(".movies__template").content;
let elList = elSelector(".movies__list");

async function request(url, options) {
  let request = await fetch(url, options);

  let data = await request.json();

  return data;
}

let getMoviesList = async () => {
  let url = BASE__URL + "/list/1?api_key=" + API__KEY;
  let movies = await request(url, {
    method: "GET",
  });

  onRender(movies.items);
};
getMoviesList();

let onRender = (movies) => {
  movies.forEach((movie) => {
    let card = elTemplate.cloneNode(true);

    let elTitle = card.querySelector(".list__card-title");
    let elImg = card.querySelector(".list__card-image");

    elTitle.textContent = movie.original_title;
    elImg.src = BG__URL + movie.poster_path;

    elList.appendChild(card);
  });
};
