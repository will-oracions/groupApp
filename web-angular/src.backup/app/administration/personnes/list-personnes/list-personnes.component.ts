import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.scss']
})
export class ListPersonnesComponent {
    tableColumns = [
        { header: 'Noms', field: 'noms' },
        { header: 'Prenoms', field: 'prenoms' },
        { header: 'Date Naissance', field: 'dateNaissance' },
        { header: "Region d'Origine", field: 'region' },
        { header: 'Genre', field: 'sexe' },

      ];

      tableData = [

      ];

      formsFields = [
        { name: 'noms', label: 'Noms', validators: [Validators.required] },
        { name: 'prenoms', label: 'Prenoms', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date Naissance', type: 'date', validators: [Validators.required] },
        { name: 'region', label: "Region d'Origine", type: 'text', validators: [Validators.required] },
        { name: 'genre', label: 'Genre', type: 'text', validators: [Validators.required] },

    ];
}
