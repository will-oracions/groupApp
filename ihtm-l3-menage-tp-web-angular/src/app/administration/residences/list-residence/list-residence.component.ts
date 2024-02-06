import { Component } from '@angular/core';

@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.scss']
})
export class ListResidenceComponent {
    tableColumns = [
        { header: 'Name', field: 'name' },
        { header: 'Details', field: 'details' },
      ];

      tableData = [
        { id: 1, name: 'John Doe', details: { id: 101, name: 'John' } },
        { id: 2, name: 'Jane Doe', details: { id: 102, name: 'Jane' } },
      ];
}
