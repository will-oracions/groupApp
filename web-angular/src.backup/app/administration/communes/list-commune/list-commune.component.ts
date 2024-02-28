import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-commune',
  templateUrl: './list-commune.component.html',
  styleUrls: ['./list-commune.component.scss']
})
export class ListCommuneComponent {
    tableColumns = [
        { header: 'Code', field: 'code' },
        { header: 'Libelle', field: 'libelle' },
      ];

      tableData = [
         ];

         formsFields = [
            { name: 'libelle', label: 'Libelle', validators: [Validators.required] },
            { name: 'code', label: 'Code', type: 'text', validators: [Validators.required] }
          ];
}
