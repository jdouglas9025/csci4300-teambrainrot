import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../../lib/mongodb";
import {Quiz} from '../../../../../models/UserSchema'

interface RouteParams {
    params: {
        id: string
    }
}

// Route for getting a specific quiz
export async function GET(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    await connectMongoDB()
    const quiz = await Quiz.findById(id)

    return NextResponse.json({quiz})
}

// Update a specific quiz
export async function PUT(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    const {ownerId, name, quizItems, image, description} = await request.json()
    await connectMongoDB()
    await Quiz.findByIdAndUpdate(id, {ownerId, name, quizItems, image, description})

    return NextResponse.json({message: 'Quiz updated'})
}

// Delete a quiz
export async function DELETE(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    await connectMongoDB()
    const deletedItem = await Quiz.findByIdAndDelete(id)

    if (!deletedItem) {
        return NextResponse.json({message: 'Quiz not found'}, {status: 404})
    }

    return NextResponse.json({message: 'Quiz deleted'})
}