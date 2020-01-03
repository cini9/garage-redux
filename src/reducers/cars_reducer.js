export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CREATED_CAR = 'CREATED_CAR';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    default:
      return state;
  }
}
