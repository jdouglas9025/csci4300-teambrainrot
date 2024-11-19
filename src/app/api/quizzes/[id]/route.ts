import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../../lib/mongodb";
import {Quiz} from '../../../../../models/quiz'

interface RouteParams {
    params: {
        id: string
    }
}

// Route for getting a specific quiz
export async function GET(routeParams: RouteParams) {
    const id = routeParams.params.id

    await connectMongoDB()
    const quiz = await Quiz.findById(id)

    return NextResponse.json({quiz})
}

// Update a specific quiz
export async function PUT(request: NextRequest, routeParams: RouteParams) {
    const id = routeParams.params.id;

    const {ownerId, name, quizItems} = await request.json()
    await connectMongoDB()
    await Quiz.findByIdAndUpdate(id, {
        ownerId: ownerId,
        name: name,
        quizItems: quizItems
    })

    return NextResponse.json({message: 'Quiz updated'})
}

// Delete a quiz
export async function DELETE(routeParams: RouteParams) {
    const id = routeParams.params.id;
    await connectMongoDB()
    const deletedItem = await Quiz.findByIdAndDelete(id)

    if (!deletedItem) {
        return NextResponse.json({message: 'Quiz not found'}, {status: 404})
    }

    return NextResponse.json({message: 'Quiz deleted'})
}