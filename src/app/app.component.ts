import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';

export interface Student {
  name: string;
  age: number;
  gender: string;
  course: string;
  hobby: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentFormComponent, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  editIndex: number | null = null;

  /** 
   * called when submit btn is clicked in the form
   * add/update student */
  addOrUpdateStudent(student: Student) {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = student;
      this.students = [...this.students];
      this.editIndex = null;
    } else {
      this.students = [...this.students, student];
    }
    this.selectedStudent = null;
  }

  /**
   * called when edit btn is clicked
   * Sets the selected student and index to populate the form for editing
   */
  editStudent(student: Student, index: number) {
    this.selectedStudent = { ...student };
    this.editIndex = index;
  }

  /** called when delete btn clicked
   * removes the student from array
   */
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.students = [...this.students]; //trigger table refesh
  }
}
