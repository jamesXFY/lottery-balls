import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryComponent } from './lottery.component';
import { LotteryModule } from './lotter.module';

fdescribe('LotteryComponent', () => {
  let component: LotteryComponent;
  let fixture: ComponentFixture<LotteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[LotteryModule]
    });

    fixture = TestBed.createComponent(LotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
