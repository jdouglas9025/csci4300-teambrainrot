import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import {Quiz} from '../../../../models/UserSchema'

// Route for creating new quiz
export async function POST(request: NextRequest) {
    const {ownerId, name, quizItems, image, description} = await request.json()
    await connectMongoDB()

    await Quiz.create({ownerId, name, quizItems, image, description})

    return NextResponse.json({message: 'Quiz added successfully.'}, {status: 201})
}

// Route for getting all quizzes -- probably not needed in prod but helpful for testing
export async function GET() {
    await connectMongoDB()
    const quizzes = await Quiz.find()

    return NextResponse.json({quizzes})
}