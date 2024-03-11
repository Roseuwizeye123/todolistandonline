class Question {
    constructor(question, options, correctAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  }
  
  class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentIndex = 0;
    }
  
    displayQuestion() {
      const currentQuestion = this.questions[this.currentIndex];
      console.log(currentQuestion.question);
      currentQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      });
    }
  
    checkAnswer(answer) {
      const currentQuestion = this.questions[this.currentIndex];
      if (answer === currentQuestion.correctAnswer) {
        console.log("Correct!");
        this.score++;
      } else {
        console.log("Incorrect.");
      }
      this.currentIndex++;
      this.displayNextQuestion();
    }
  
    displayNextQuestion() {
      if (this.currentIndex < this.questions.length) {
        this.displayQuestion();
      } else {
        this.displayScore();
      }
    }
  
    displayScore() {
      console.log(`Quiz has ended. Your score: ${this.score}/${this.questions.length}`);
    }
  }
  
  // Example usage:
  const questions = [
    new Question("What is the capital of France?", ["Paris", "London", "Berlin", "Madrid"], 1),
    new Question("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Earth", "Venus"], 2),
    new Question("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], 1)
  ];
  
  const quiz = new Quiz(questions);
  quiz.displayQuestion();
  
  // Assume the user's input is received through a function or interface
  // For simplicity, let's assume the user always inputs the index of the correct answer
  // You can integrate it with input handling mechanisms for a real-world application
  quiz.checkAnswer(1);
  quiz.checkAnswer(2);
  quiz.checkAnswer(1);
  