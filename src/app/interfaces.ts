// Interface for just editable fields -- prevents issues with MongoDB fields
export interface IAnswerEdit {
    content: string
}

export interface IQuizItemEdit {
    question: string,
    answers: IAnswerEdit[],
    correctAnswerContent: string
}

export interface IQuizEdit {
    ownerId: string,
    name: string, // Quiz name
    quizItems: IQuizItemEdit[], // Questions/Answers
    image: string, // Image URL
    description: string
}