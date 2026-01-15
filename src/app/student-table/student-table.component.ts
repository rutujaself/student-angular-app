import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent {
  @Input() students: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'age', 'gender', 'course', 'hobby', 'actions'];

  onEdit(student: any, index: number) {
    this.edit.emit({ student, index });
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }
}
