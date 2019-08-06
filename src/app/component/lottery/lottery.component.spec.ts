import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryComponent } from './lottery.component';
import { LotteryModule } from './lotter.module';
import {  HttpClient } from '@angular/common/http';
import { LotteryService } from 'src/app/service/lottery.service';

describe('LotteryComponent', () => {
  let component: LotteryComponent;
  let fixture: ComponentFixture<LotteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LotteryModule],
      providers: [LotteryService]
    });

    fixture = TestBed.createComponent(LotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
