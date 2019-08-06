import { Component, Input, ViewChild, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input()
  public lotteryNumber?: number;

  @Input()
  public lotteryResult?: number[] = [];

  @ViewChild('square', {static : false})
  public squareElement: ElementRef;

  constructor(private readonly renderer2: Renderer2) {

  }

  public checkLotteryNumber() {
    let selected = false;
    this.lotteryResult.forEach(result => {
      if (result === this.lotteryNumber) {
        selected = true;
      }
    });

    return selected;
  }

}
