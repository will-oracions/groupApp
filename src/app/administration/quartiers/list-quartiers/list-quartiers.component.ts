import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-quartiers',
  templateUrl: './list-quartiers.component.html',
  styleUrls: ['./list-quartiers.component.scss']
})
export class ListQuartiersComponent {
    tableColumns = [
        { header: 'Code', field: 'code' },
        { header: 'Libelle', field: 'libelle' },
      ];

      tableData = [
         ];
         formsFields = [
            { name: 'code', label: 'Code', validators: [Validators.required] },
            { name: 'libelle', label: 'Libelle', type: 'text', validators: [Validators.required] },

        ];
}
