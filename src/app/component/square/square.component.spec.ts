import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    });

    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if number be selected and false if not', () => {
    component.lotteryNumber = 1;
    component.lotteryResult = [2, 3, 1];

    fixture.detectChanges();

    expect(component.checkLotteryNumber()).toBe(true);

    component.lotteryNumber = 5;

    fixture.detectChanges();

    expect(component.checkLotteryNumber()).toBe(false);
  });
});
