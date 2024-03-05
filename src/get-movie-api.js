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

console.log(getTrendMovies());

const requests = {
  getTrendMovies,
};

export default requests;
