import IMDB from '../apis/imdb-database';
import _ from "lodash";

const key = '?rapidapi-key=bd035e0607msh08dc22b1b8c9880p1491e1jsnd5233de85592';

export const searchFilms = (name) => async (dispatch) => {
    const response = await IMDB.get(`/search/${name}${key}`);
    dispatch({ type: 'SEARCH_FILMS', payload: response.data.titles  });
};

export const fetchFilm = (id) => async (dispatch) => {
    const response = await IMDB.get(`/film/${id}${key}`);
    dispatch({ type: 'FETCH_FILM', payload: response.data })
}