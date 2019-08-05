import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BallComponent } from '../ball/ball.component';
import { SquareComponent } from '../square/square.component';
import { LotteryComponent } from './lottery.component';

@NgModule({
  declarations: [
    BallComponent,
    SquareComponent,
    LotteryComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  exports: [BallComponent,
    SquareComponent,
    LotteryComponent]
})
export class LotteryModule { }
