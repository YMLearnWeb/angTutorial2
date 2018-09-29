import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  inputText: string = '';
  constructor(private _shareService: ShareService) { }
  add():any{
    this._shareService.append(this.inputText);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
  ngOnInit() {

  }

}
