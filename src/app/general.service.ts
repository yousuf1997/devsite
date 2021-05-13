import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private URL = "https://coronavirus.m.pipedream.net";

  constructor(private http: HttpClient) { }

  getTotalCovidCases() {
    return this.http.get<any>(this.URL);
  }
}
