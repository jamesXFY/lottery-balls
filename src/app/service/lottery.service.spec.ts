import { TestBed } from '@angular/core/testing';

import { LotteryService } from './lottery.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LotterNumbers, Result } from './lotter';

describe('LotteryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be defined', () => {
    const service: LotteryService = TestBed.get(LotteryService);
    expect(service).toBeDefined();
  });
});
