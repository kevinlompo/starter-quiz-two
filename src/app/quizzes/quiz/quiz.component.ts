import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  deletedQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

   themeByIcon = {
    Acteurs: 'fas fa-video',
    Football : 'fas fa-futbol',
    Jeu : 'fas fa-gamepad',
    Santé: 'fas fa-ambulance',
    Book_Dead: 'fas fa-book-dead'
  };

  constructor() {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz(){
    this.deletedQuiz.emit(this.quiz);
  }
}
