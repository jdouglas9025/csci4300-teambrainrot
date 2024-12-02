import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../../../lib/mongodb";
import {Quiz} from '../../../../../../models/schemas'

interface RouteParams {
    params: {
        id: string
    }
}

// Route for getting all quizzes belonging to a particular owner
export async function GET(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    await connectMongoDB()
    const quizzes = await Quiz.find({ownerId: id}).lean()

    return NextResponse.json({quizzes})
}