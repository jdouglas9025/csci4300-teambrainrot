import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import {Quiz, User} from '../../../../models/UserSchema'

// Route for creating new quiz
export async function POST(request: NextRequest) {
    // In addition quiz, userId should be included in body to associate with owner
    const {userId, name, quizItems} = await request.json()
    await connectMongoDB()

    const newQuiz = await Quiz.create({name, quizItems})

    // Add quiz to owner's list
    const {email, password, quizzes} = await User.findById(userId)
    const updatedQuizzes = [...quizzes, newQuiz]
    await User.findByIdAndUpdate(userId, {
        email: email,
        password: password,
        quizzes: updatedQuizzes
    })

    return NextResponse.json({message: 'Quiz added successfully.'}, {status: 201})
}

// Route for getting all quizzes -- probably not needed in prod but helpful for testing
export async function GET() {
    await connectMongoDB()
    const quizzes = await Quiz.find()

    return NextResponse.json({quizzes})
}