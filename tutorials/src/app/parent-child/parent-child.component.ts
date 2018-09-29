import { Component, OnInit } from '@angular/core';
import { ShareService } from './ShareService';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css'],
  providers: [ShareService]
})
export class ParentChildComponent implements OnInit {
  list: string[] = [];
  constructor(private _shareService: ShareService) { }

  ngOnInit() {
    this.list = this._shareService.list
  }
}
