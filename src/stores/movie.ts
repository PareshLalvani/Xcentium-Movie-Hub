import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type?: string
}

export interface MovieDetails extends Movie {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response: string
}

export const useMovieStore = defineStore('movie', () => {
  const movies = ref<Movie[]>([])
  const movieDetails = ref<MovieDetails | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY
  const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL

  async function fetchMovies(searchQuery?: string | null) {
    loading.value = true
    error.value = null
    //console.log("searchQuery", searchQuery);
    try {
      // const response = JSON.parse('{"Search":[{"Title":"Last Action Hero","Year":"1993","imdbID":"tt0107362","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGU2NWQyY2ItY2JiZS00ZDJhLWI0NDQtNjMyNWU3MDA1NTgzXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Back in Action","Year":"2025","imdbID":"tt21191806","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Looney Tunes: Back in Action","Year":"2003","imdbID":"tt0318155","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDU2NmU2YzktNWFlMC00MDk1LWFhZjQtYjUxZThiMjZhNjQ2XkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"An Action Hero","Year":"2022","imdbID":"tt15600222","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWUzNzljNjMtYTdiZS00MWQ2LWFkZWItYTM0MzVmZGFhYzNjXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"A Civil Action","Year":"1998","imdbID":"tt0120633","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDgyNDNkYTMtYmU0NC00YjliLWFhNjgtMmFhOTQ1MmE4NzNmXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Missing in Action","Year":"1984","imdbID":"tt0087727","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGE2NmNlODYtMzMyNS00YTM0LThlMzMtNjg1YTBhMTRkNjJhXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Action Jackson","Year":"1988","imdbID":"tt0094612","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzY1N2NjMjYtM2U3OS00OTMzLTk4OGEtMWI1YjUwMWRjODQ1XkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Action Point","Year":"2018","imdbID":"tt6495770","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg"},{"Title":"321 Action","Year":"2020","imdbID":"tt13423846","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODdlNmZiYmItYTkyZC00NDNhLWEzMDctZjJhMDNjZWJkNTRlXkEyXkFqcGc@._V1_SX300.jpg"},{"Title":"Missing in Action 2: The Beginning","Year":"1985","imdbID":"tt0089604","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjQwNjUxZjUtYmUxOS00YmRjLTljZTgtMTc0OTFlZDllZjM5XkEyXkFqcGc@._V1_SX300.jpg"}],"totalResults":"1106","Response":"True"}');
      // movies.value = response.Search
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: searchQuery || 'action', // load action movies by default
          type: 'movie'
        }
      })
      
      if (response.data.Response === 'True') {
        movies.value = response.data.Search
      } else {
        error.value = response.data.Error || 'No movies found'
      }
    } catch (err) {
      error.value = 'Failed to fetch movies'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function fetchMovieDetails(id: string) {
    loading.value = true
    error.value = null
    try {
      // const response = JSON.parse('{"Title":"Back in Action","Year":"2025","Rated":"PG-13","Released":"17 Jan 2025","Runtime":"114 min","Genre":"Action, Comedy","Director":"Seth Gordon","Writer":"Seth Gordon, Brendan OBrien, Lillian Yu","Actors":"Jamie Foxx, Cameron Diaz, McKenna Roberts","Plot":"Former CIA spies Emily and Matt are pulled back into espionage after their secret identities are exposed.","Language":"English, Polish","Country":"United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"29%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"5.9","imdbVotes":"50,983","imdbID":"tt21191806","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}');
      // movieDetails.value = response
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          i: id,
          plot: 'full'
        }
      })
      if (response.data.Response === 'True') {
        movieDetails.value = response.data
      } else {
        error.value = response.data.Error || 'Movie details not found'
      }
    } catch (err) {
      error.value = 'Failed to fetch movie details'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    movies,
    movieDetails,
    fetchMovies,
    fetchMovieDetails,
    error,
    loading
  }
})