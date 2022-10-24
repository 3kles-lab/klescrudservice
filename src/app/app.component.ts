
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
  title = 'KlesCRUDService';
}
