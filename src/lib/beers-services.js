import axios from 'axios';


class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    })

  }

  getBeers() {
    return this.api.get('/all')
      .then(({data}) => data);
  }

  getBeer(id) {
    return this.api.get(`/single/${id}`)
      .then(({data}) => data);
  }

  getRandomBeer() {
    return this.api.get('/random')
    .then(({data}) => data);
  }
}

const api = new Api();

export default api;
