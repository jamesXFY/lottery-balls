import { Component, OnChanges, Input, ViewChild, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnChanges {

  @Input()
  public lotteryNumber?: number;

  @ViewChild('square', {static : false})
  public squareElement: ElementRef;

  constructor(private readonly renderer2: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('lotteryNumber') && changes.lotteryNumber.currentValue) {
      // console.log('change');
      // this.renderer2.addClass(this.squareElement.nativeElement, 'filled');
    }
  }

}
