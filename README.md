# CodeQuiz


This is a multiple choice quiz that allows the user to to store their high score and compare it against other scores. 

At the start, the user can either begin teh quiz, or go to the 'High Scores' page to view any stored scores of past users. 

!(1_Assets/Images/Screenshots/quizStart)

The questions and corresponding answers are stored in an array, and the program uses the question function to iterate through that array and dynamically create html for each question.

When the user begins the quiz a 60 second timer starts and for every question they answer incorrectly there are ten seconds subtracted from their time. The remaining time at the end of the quiz determines their score. 

At the end of the quiz, they are asked to submit their name.

Finally, the user is taken to the high scores page where they can choose to clear the scores, or go back to the landing page. 
