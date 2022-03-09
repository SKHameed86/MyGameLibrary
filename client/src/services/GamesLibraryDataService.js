import http from '../http-common';

class GamesLibraryDataService {
  getAll() {
    return http.get('/gameEntries');
  }

  create(data) {
    return http.post('/gameEntries', data);
  }
}

export default new GamesLibraryDataService();
