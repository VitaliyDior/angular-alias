import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class VocabularyService {
  private vocabulary;
  private wordId = 0;
  public word;
  constructor(private http: Http) {
  }

  load() {
    this.http
        .get('http://alias.moydomen.com/words.json')
        .subscribe(resp => {
          this.vocabulary = resp.json();
          this.word = this.getNextWord();
        });
  }
  getNextWord() {
    return this.vocabulary[this.wordId++];
  }
}
