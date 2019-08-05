import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallComponent } from './ball.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('BallComponent', () => {
  let component: BallComponent;
  let fixture: ComponentFixture<BallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BallComponent ]
    });
    fixture = TestBed.createComponent(BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('the background color should change, the number should right', () => {
    component.ngOnChanges({
      lotteryNumber: new SimpleChange(undefined, 8, true)
    });

    fixture.detectChanges();

    const ballElement = fixture.debugElement.query(By.css('.ball'));
    const spanElement = fixture.debugElement.query(By.css('.number'));

    expect(ballElement.nativeElement).toHaveClass('filled');
    expect(spanElement).withContext('8');

  });
});
