import { Component, OnChanges, SimpleChanges, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnChanges {

  @Input()
  public lotteryNumber?: number;

  @ViewChild('ball', {static : false})
  public ballElement: ElementRef;

  constructor(private readonly renderer2: Renderer2, private readonly el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('lotteryNumber') && changes.lotteryNumber.currentValue) {
      // this.renderer2.addClass(this.el.nativeElement, 'filled');
    }
  }
}
