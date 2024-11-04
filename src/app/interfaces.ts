// Store common interfaces
interface Answer {
    id: string, // E.g., A B C D
    content: string
}

// Represents a quiz item (contains question, answers, and correct answer)
export interface QuizItem {
    id: string // Unique ID
    question: string
    answers: Answer[]
    correctAnswerId: string
    selectedAnswerId: string
}
