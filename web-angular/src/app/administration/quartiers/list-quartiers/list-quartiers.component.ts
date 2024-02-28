import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-quartiers',
  templateUrl: './list-quartiers.component.html',
  styleUrls: ['./list-quartiers.component.scss']
})
export class ListQuartiersComponent {
  load: boolean = false;

  tableColumns = [
    { header: 'Libelle', field: 'libelle' },
  ];

      tableData = [
         ];
         formsFields = [
            { name: 'idCommunes', label: 'Communes', type: 'dropdown' , validators: [Validators.required], state: "commune" },
            { name: 'libelle', label: 'Libelle', type: 'text', validators: [Validators.required] },

        ];
        constructor(private service: FormService){}
        ngOnInit(): void {
          this.getAlls();
        }
        getAlls(){
          this.load = true;
          this.service.getAll("quartiers").subscribe({
              next: value =>         {     
                this.tableData = value;
      
              },
              error: err => console.error('Observable emitted an error: ' + err),
              complete: () => {  this.load = false},
          });
        }

        

        event(event: any){
          if(event == 'refresh'){
 
             this.ngOnInit()
           }
       
       }
}
