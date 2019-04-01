import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // propiety binding
  @Input("propiedadhijo") datohijo: any;

  constructor() { }

  ngOnInit() {
  }

}
