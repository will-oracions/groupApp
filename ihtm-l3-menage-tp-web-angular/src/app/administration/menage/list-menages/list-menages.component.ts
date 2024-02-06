import { Component } from '@angular/core';

@Component({
  selector: 'app-list-menages',
  templateUrl: './list-menages.component.html',
  styleUrls: ['./list-menages.component.scss']
})
export class ListMenagesComponent {
    tableColumns = [
        { header: 'ID', field: 'id' },
        { header: 'Name', field: 'name' },
        { header: 'Details', field: 'details' },
      ];

      tableData = [
        { id: 1, name: 'John Doe', details: { id: 101, name: 'John' } },
        { id: 2, name: 'Jane Doe', details: { id: 102, name: 'Jane' } },
      ];
}
