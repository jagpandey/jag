import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApnapediaService {

  constructor(private http: HttpClient) { }

  wikiSearch(term: string) {

    return this.http.get('https://en.wikipedia.org/w/api.php', {

      params: {

        action: 'query',

        format: 'json',

        list: 'search',

        utf8: '1',

        srsearch: term,

        origin: '*'

      }

    }
    )

  }
}
