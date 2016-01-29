import initialState from './data/initialState';

export default function reducer(state=initialState, action) {

  switch (action.type) {
    case 'UPDATE_HTML':
      return {
        html: action.html
      };
    default:
      return state;
  }

}
