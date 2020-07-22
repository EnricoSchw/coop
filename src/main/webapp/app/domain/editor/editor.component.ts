import { Component, OnInit } from '@angular/core';
import { IPFS } from 'ipfs';

@Component({
  selector: 'jhi-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const ipfsv = new IPFS({});
  }
}
