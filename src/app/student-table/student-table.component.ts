import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatTooltipModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent {
  @Input() students: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  displayedColumns: string[] = ['name', 'age', 'department', 'course', 'gender', 'hobby', 'remarks', 'actions'];

  /**
 * Called when Edit button is clicked for a row
 * Emits the student object and its index to the parent component
 */ 
  onEdit(student: any, index: number) {
    this.edit.emit({ student, index });
  }

  /**
 * Called when Delete button is clicked for a row
 * Emits the index of the row to delete to the parent component
 */ 
  onDelete(index: number) {
    this.delete.emit(index);
  }
}
