import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent {
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
