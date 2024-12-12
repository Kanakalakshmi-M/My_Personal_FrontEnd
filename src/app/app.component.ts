import { Component } from '@angular/core';
import { StudentListComponent } from './component/student-list/student-list.component';

@Component({
  selector: 'app-root',
  imports: [StudentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student_management_system';
}
