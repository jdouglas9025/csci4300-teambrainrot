import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import {User} from '../../../../models/schemas'
import bcrypt from "bcryptjs"

// Route for creating new user
export async function POST(request: NextRequest) {
    const {email, password} = await request.json()
    await connectMongoDB()

    const hashedPassword = await bcrypt.hash(password, 5)

    // Must specify field since name differs
    await User.create({email, password: hashedPassword})

    return NextResponse.json({message: 'User added successfully.'}, {status: 201})
}

// Route for getting all users -- probably not needed in prod but helpful for testing
export async function GET() {
    await connectMongoDB()
    const users = await User.find()

    return NextResponse.json({users})
}