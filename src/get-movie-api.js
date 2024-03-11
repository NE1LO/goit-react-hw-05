import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getTrendMovies = async () => {
  try {
    const response = await apiInstance.get("trending/movie/day", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getDetailsMovie = async (id) => {
  try {
    const response = await apiInstance.get(`movie/${id}?Language=en-US`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getReviews = async (id) => {
  try {
    const response = await apiInstance.get(
      `movie/${id}/reviews?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesByWord = async (query) => {
  try {
    const response = await apiInstance.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCast = async (id) => {
  try {
    const response = await apiInstance.get(
      `movie/${id}/credits?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const requests = {
  getCast,
  getMoviesByWord,
  getTrendMovies,
  getDetailsMovie,
  getReviews,
};

export default requests;
