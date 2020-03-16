import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/db-model';
import { MockRegistros } from '../mockDb/mock'
import { ExportService } from '../export.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mockRegistros: Registro[] = MockRegistros
  constructor( private exportService: ExportService) { }

  ngOnInit() {

  }
  salvaCsv(){
    this.exportService.downloadFile(this.mockRegistros)
  }

}
