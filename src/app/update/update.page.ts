import { Component, OnInit } from '@angular/core';
import { Quiz , iQuiz} from '../admin/model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: any;
  choices: string[] = [];
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

  constructor(private router: Router, private auth: AuthenticationService, private adminService: AdminService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.synch(this.auth.quizList);
  }
isLoading: boolean = false;
  async updateQuiz() {
    this.isLoading = true;
    if (this.isLoading == true) {
      if (this.quizzes.id) {
        await this.adminService.updateQuiz(this.quizzes);
        this.auth.presentAlert('SUCCESS', 'UPDATED SUCCESSFULLY');
      }
    }
    this.quizzes = new Quiz();
    this.router.navigate(['admin']);
    this.isLoading = false;
  }

  synch(quiz: iQuiz[]) {
    quiz.forEach( data => {
      if (this.id == data.id) {
        this.quizzes.id = data.id;
        this.quizzes.type = data.type;
        this.quizzes.question = data.question;
        this.quizzes.correctAnswer = data.correctAnswer;
        this.quizzes.choices = data.choices;
        this.quizzes.category = data.category;
        this.quizzes.level = data.level;
      }
    });
  }
}
