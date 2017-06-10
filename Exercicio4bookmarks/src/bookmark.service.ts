import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {

  errorHandler = error => console.error('BookmarkService error', error);
  private baseUrl = 'https://projetoteste-775f7.firebaseio.com/';
  private collection = 'listanegra';

  constructor(private http: Http) { }

  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getBookmarks() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeBookmark(bookmark) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${bookmark.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateBookmark(bookmark) {
    const json = JSON.stringify({
      nome: bookmark.nome,
      apelido: bookmark.apelido
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${bookmark.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        apelido: parsedResponse[id].apelido
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}
