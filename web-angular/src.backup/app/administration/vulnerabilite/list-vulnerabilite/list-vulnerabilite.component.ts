import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-vulnerabilite',
  templateUrl: './list-vulnerabilite.component.html',
  styleUrls: ['./list-vulnerabilite.component.scss']
})
export class ListVulnerabiliteComponent {
    tableColumns = [
        { header: 'Code', field: 'code' },
        { header: 'Libelle', field: 'libelle' },
        { header: 'Description', field: 'description' },

      ];

      tableData = [
            ];
            formsFields = [
                { name: 'code', label: 'Code', validators: [Validators.required] },
                { name: 'libelle', label: 'Libelle', type: 'text', validators: [Validators.required] },
                { name: 'description', label: 'Description', type: 'text', validators: [Validators.required] },

            ];
}
