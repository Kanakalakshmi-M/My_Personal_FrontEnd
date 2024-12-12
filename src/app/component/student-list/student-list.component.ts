import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Student } from '../../student';
import { ApiClient } from '../../services/api.client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  constructor(private apiClient: ApiClient) { }

  students!: Student[];

  ngOnInit(): void {
    this.apiClient.getStudentList().subscribe(
      (res) => { this.getStudentListSucess(res) },
      (err) => { this.getStudentListFailure(err) }
    );

  }

  getStudentListSucess(res: any) {
    this.students = res;
    console.log(this.students);
  }

  getStudentListFailure(err: any) {
    // nothing
  }
}
