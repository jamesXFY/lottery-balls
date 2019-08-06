import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LotterNumbers, Result } from './lotter';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  private configUrl =
    'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults';
  private configParam = {
    CompanyId: 'GoldenCasket',
    MaxDrawCountPerProduct: 1,
    OptionalProductFilter: ['Powerball']
  };
  constructor(private readonly httpClient: HttpClient) {}

  public getLotteryNumbers(): Observable<Result> {
    return this.httpClient.post<Result>(this.configUrl, this.configParam);
  }
}
