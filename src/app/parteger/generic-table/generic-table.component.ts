import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {
    @Input() columns: any[] = [];
    @Input() data: any[] = [];
    @Input() titlePage: string = "";
    @Input() fields: any[] = [];

    dynamicComponents: any = {};
    viewContainerRef: any;
    temporaile: any = {};
    visible: boolean = false;
    title: string = "";
    size= "7"
    constructor() {}

    ngOnInit() {
      this.columns.forEach((col) => {
        if (col.component) {
          this.dynamicComponents[col.field] = col.component;
        }
      });
    }

    createInjector(data: any) {
      const injector = Injector.create({
        providers: [{ provide: 'data', useValue: data }],
        parent: this.viewContainerRef.parentInjector,
      });
      return injector;
    }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
openNew() {
    this.title = "Ajouter"
    this.temporaile = {};
    this.visible = true;
}



edit(val: any) {
    this.title = "Modifier"
    console.log(val);

    this.temporaile = { ...val };
    console.log(this.temporaile);
    this.visible = true;
}


hideDialog() {
  this.visible = false;
}

event(event: any){
    console.log(event)
    if(event == "disabled"){
        this.visible = false;
    }

}
}
