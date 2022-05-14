import { atom } from "recoil";
import { axiosInstance } from "shared/api";
import { Movie } from "types/movid";

// export const movieListState = atom({
//   key:"movieList",
//   get: async () => axiosInstance.get<Movie>('/?apikey=92e32667').then((res)=> res.data),
// });