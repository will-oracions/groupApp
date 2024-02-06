import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-forms',
  templateUrl: './generic-forms.component.html',
  styleUrls: ['./generic-forms.component.scss']
})
export class GenericFormsComponent implements OnInit{
    @Input() fields: any[] = []; // Array of form field configurations
    @Input() temporaile: any = {}; // Array of form field configurations

    @Output() customEvent = new EventEmitter<string>();
    form: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
      this.createForm();
      console.log(this.temporaile);
    }

    createForm() {
      const formGroupConfig = {};

      this.fields.forEach(field => {
        formGroupConfig[field.name] = [
          field.value || '',
          field.validators || []
        ];
      });

      this.form = this.fb.group(formGroupConfig);
    }
    disabled(){
        this.customEvent.emit('disabled');

    }
}
