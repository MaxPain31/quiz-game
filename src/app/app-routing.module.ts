import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPage } from './start/start.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'levels',
    loadChildren: () => import('./levels/levels.module').then( m => m.LevelsPageModule)
  },
  {
    path: 'math-quiz',
    loadChildren: () => import('./math-quiz/math-quiz.module').then( m => m.MathQuizPageModule)
  },
  {
    path: 'science-quiz',
    loadChildren: () => import('./science-quiz/science-quiz.module').then( m => m.ScienceQuizPageModule)
  },
  {
    path: 'tech-quiz',
    loadChildren: () => import('./tech-quiz/tech-quiz.module').then( m => m.TechQuizPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'science-quiz2',
    loadChildren: () => import('./science-quiz2/science-quiz2.module').then( m => m.ScienceQuiz2PageModule)
  },
  {
    path: 'science-quiz3',
    loadChildren: () => import('./science-quiz3/science-quiz3.module').then( m => m.ScienceQuiz3PageModule)
  },
  {
    path: 'sci-level',
    loadChildren: () => import('./sci-level/sci-level.module').then( m => m.SciLevelPageModule)
  },
  {
    path: 'tech-level',
    loadChildren: () => import('./tech-level/tech-level.module').then( m => m.TechLevelPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'tech-quiz2',
    loadChildren: () => import('./tech-quiz2/tech-quiz2.module').then( m => m.TechQuiz2PageModule)
  },
  {
    path: 'tech-quiz3',
    loadChildren: () => import('./tech-quiz3/tech-quiz3.module').then( m => m.TechQuiz3PageModule)
  },
  {
    path: 'game-over',
    loadChildren: () => import('./game-over/game-over.module').then( m => m.GameOverPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'mode',
    loadChildren: () => import('./mode/mode.module').then( m => m.ModePageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
