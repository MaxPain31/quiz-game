import { Component, OnInit } from '@angular/core';
import { Quiz } from '../admin/model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  quizzes: Quiz = new Quiz();
  category: string[] = [
    'Mathematics',
    'Science',
    'Technology',
  ];
  level: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];

  constructor(private router: Router, private auth: AuthenticationService, private adminService: AdminService) { }

  ngOnInit() {
  }
isLoading: boolean = false;
  async createQuiz() {
    this.isLoading = true;
    if (this.isLoading == true) {
      if (!this.quizzes.id) {
        await this.adminService.addQuiz(this.quizzes);
        this.auth.presentAlert('SUCCESS', 'UPDATED SUCCESSFULLY');
      }
    }
    this.quizzes = new Quiz();
    this.router.navigate(['admin']);
    this.isLoading = false;
  }

}
