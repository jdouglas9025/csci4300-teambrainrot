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