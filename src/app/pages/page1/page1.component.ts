import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  name: string = 'Goyin';
  seconds: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(100).subscribe(n => this.seconds = n)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');

  }

  ngDoCheck(): void {
    console.log('ngDoCheck');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  Save = () => {

  }
}
