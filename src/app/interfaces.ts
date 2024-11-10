// Store common interfaces
interface Answer {
    id: string, // E.g., A B C D
    // Maybe add value instead if ID assigned by DB?
    content: string
}

// Represents a quiz item (contains question, answers, and correct answer)
export interface QuizItem {
    id: string // Unique ID
    question: string
    answers: Answer[]
    correctAnswerId: string
    selectedAnswerId: string | null // May not be specified since user may have not selected an answer
}


// Represents a quiz (contains many items)
export interface Quiz {
    id: string // Unique ID
    name: string // Quiz name
    quizItems: QuizItem[] // Questions/Answers
}



// Temp sample data
export const sampleQuizItem: QuizItem = {
    id: '1',
    question: 'What is HTML?',
    answers: [
        {
            id: "A",
            content: "A language."
        },
        {
            id: "B",
            content: "Something else."
        }
    ],
    correctAnswerId: 'A',
    selectedAnswerId: null
}

export const sampleQuiz: Quiz = {
    id: '1',
    name: 'HTML Quiz',
    quizItems: [
        sampleQuizItem,
        {
            id: '2',
            question: 'Do you love Web Programming?',
            answers: [
                {
                    id: "A",
                    content: "Yes."
                },
                {
                    id: "B",
                    content: "Maybe."
                },
                {
                    id: "C",
                    content: "Nope."
                }
            ],
            correctAnswerId: 'A',
            selectedAnswerId: null
        },
        {
            id: '3',
            question: 'Do you love UGA',
            answers: [
                {
                    id: "A",
                    content: "Yes."
                },
                {
                    id: "B",
                    content: "Maybe."
                },
                {
                    id: "C",
                    content: "Nope."
                }
            ],
            correctAnswerId: 'A',
            selectedAnswerId: null
        }
    ]
}
