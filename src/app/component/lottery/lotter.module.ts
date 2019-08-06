import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BallComponent } from '../ball/ball.component';
import { SquareComponent } from '../square/square.component';
import { LotteryComponent } from './lottery.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LotteryService } from 'src/app/service/lottery.service';

@NgModule({
  declarations: [
    BallComponent,
    SquareComponent,
    LotteryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [LotteryService, HttpClient],
  exports: [BallComponent,
    SquareComponent,
    LotteryComponent]
})
export class LotteryModule { }
