import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent {
    tableColumns = [
        { header: 'Noms Utilisateur', field: 'username' },
        { header: 'Role', field: 'role' },
        { header: 'Type', field: 'type' },
        { header: 'Noms', field: 'noms' },

      ];

      tableData = [
          ];

          formsFields = [
            { name: 'userName', label: "Noms d'Utilisateur", validators: [Validators.required] },
            { name: 'role', label: 'Role', type: 'text', validators: [Validators.required] },
            { name: 'type', label: 'Type', type: 'text', validators: [Validators.required] },
            { name: 'noms', label: "Noms", type: 'text', validators: [Validators.required] },
        ];
}
