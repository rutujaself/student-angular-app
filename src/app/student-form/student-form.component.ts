import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnChanges {
  @Input() editStudent: any = null;
  @Output() studentAdded = new EventEmitter<any>();
  studentForm: FormGroup;
  courses: string[] = ['Angular','React','Node'];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      course: ['', Validators.required],
      hobby: [false]
    });
  }

  /**
 * If editStudent is provided, patch the form with its values
 **/
  ngOnChanges(changes: SimpleChanges) {
    if (changes['editStudent'] && this.editStudent) {
      this.studentForm.patchValue(this.editStudent);
    }
  }

  /**
   * Called when form submit button is clicked
   * Emits the student object to parent component 
   */
  submit() {
    if (this.studentForm.invalid) {
      return;
    }
    this.studentAdded.emit(this.studentForm.value);
    this.studentForm.reset({ hobby: false }); //reset hobby
  }
}
