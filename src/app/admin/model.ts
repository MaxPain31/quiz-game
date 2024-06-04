export interface iQuiz{
    id: string;
    type: string;
    question: string;
    correctAnswer: string;
    choices: string[];
    category: string[];
    level: string[];
}

export class Quiz{
    id: string;
    type: string;
    question: string;
    correctAnswer: string;
    choices: string[];
    category:string[];
    level: string[];

    constructor(id: string = '',type: string = '', question: string = '', correctAnswer: string = '', choices: string[] = [], category: string[] = [], level: string[] = []){
       this.id=id,
        this.type = type,
        this.question = question,
        this.correctAnswer = correctAnswer,
        this.choices = choices,
        this.category = category,
        this.level = level;

    }
}