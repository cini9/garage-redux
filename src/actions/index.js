// TODO: add and export your own actions
import { FETCH_CARS, FETCH_CAR } from '../reducers/cars_reducer';

const BASE_URL = "https://wagon-garage-api.herokuapp.com/garage326";

export function fetchCars() {
  const promise = fetch(`${BASE_URL}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

