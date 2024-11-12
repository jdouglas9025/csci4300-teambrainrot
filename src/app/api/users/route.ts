import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import { User } from '../../../../models/user'

// Route for creating new user
export async function POST(request: NextRequest) {
    const { email, password } = await request.json()
    await connectMongoDB()

    await User.create({email, password})

    return NextResponse.json({message: 'User added successfully.'}, {status: 201})
}

// Route for getting all users -- probably not needed in prod but helpful for testing
export async function GET() {
    await connectMongoDB()
    const quizzes = await User.find()

    return NextResponse.json({quizzes})
}