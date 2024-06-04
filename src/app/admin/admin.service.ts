import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc, getDoc, query, where } from "firebase/firestore";
import { iQuiz, Quiz } from './model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  async getAllQuiz(): Promise<iQuiz[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const quizzes : Quiz[]=[];
    const getDoc= await getDocs(collection(firestore,'quizzle'));
    getDoc.forEach((doc) => {
      const quiz = doc.data() as Quiz;
      quiz.id = doc.id;
      quizzes.push(quiz);
    });
    return quizzes;
  }

  async addQuiz(quiz: Quiz){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    try{
      const docId = await addDoc(collection(firestore,'quizzle'),{
        type: quiz.type,
        question: quiz.question,
        correctAnswer: quiz.correctAnswer,
        choices: quiz.choices,
        category: quiz.category,
        level: quiz.level,
      });
      console.log('document added',docId.id);
      
    }
    catch(e){
      console.log('error', e);
    }
  }

  async deleteQuiz(quiz: Quiz){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    try{
      const docRef = doc(firestore, 'quizzle', quiz.id);
      await deleteDoc(docRef);

      console.log('document deleted', docRef.id);
    }
    catch(e){
      console.log('error', e);
    }
  }

  async updateQuiz(quiz: Quiz){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    try{
      const docRef = doc(firestore, 'quizzle', quiz.id);
      await updateDoc(docRef, {type: quiz.type, question: quiz.question, correctAnswer: quiz.correctAnswer, choices: quiz.choices, category: quiz.category, level: quiz.level});

      console.log('document updated', docRef.id);
    }
    catch(e){
      console.log('error', e);
    }
  }

  async getEasyQuiz(type: any): Promise<string[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const a = query(collection(firestore,'quizzle'), where("type", "==", type));
    const b = await getDocs(a);
    
    const c:string[]=[];
    b.forEach((doc) => {
      c.push(doc.id);
    }); 
    return c;
  }

  async getMultipleId(ids: string[]):Promise<iQuiz[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const result: iQuiz[] = [];
    try{
      for(const id of ids){
        const docRef = doc(firestore, 'quizzle',id);
        const a = await getDoc(docRef);
        if(a.exists()){
            result.push({ id: a.id, ...a.data()} as iQuiz);
        }
      } 
      return result;
    }
    catch(e){
      console.error;
      throw e;
    }

  }
  async getLevel(level: string): Promise<string[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const a = query(collection(firestore,'quizzle'), where("level", "array-contains", level));
    const b = await getDocs(a);
    
    const c:string[]=[];
    b.forEach((doc) => {
      c.push(doc.id);
    }); 
    return c;
  }
}
