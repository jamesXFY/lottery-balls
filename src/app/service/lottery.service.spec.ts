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

  it('should return value from observable', () => {
    const service: LotteryService = TestBed.get(LotteryService);
    service.getLotteryNumbers().subscribe(result => {
      expect(result.DrawResults.length).toBeGreaterThan(0);
      expect(result.DrawResults[0].PrimaryNumbers.length).toBe(7);
      expect(result.DrawResults[0].SecondaryNumbers.length).toBe(1);
    });
  });
});
