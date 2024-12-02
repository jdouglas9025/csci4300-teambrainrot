import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../../lib/mongodb";
import {User} from '../../../../../models/schemas'

interface RouteParams {
    params: {
        id: string
    }
}

// Get user
export async function GET(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    await connectMongoDB()
    const user = await User.findById(id)

    return NextResponse.json({user})
}

// Update a specific user
export async function PUT(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;

    const {email, password} = await request.json()
    await connectMongoDB()
    await User.findByIdAndUpdate(id, {
        email: email,
        password: password
    })

    return NextResponse.json({message: 'User updated'})
}

// Delete a user
export async function DELETE(request: NextRequest, routeParams: RouteParams) {
    const { id } = await routeParams.params;
    await connectMongoDB()
    const deletedItem = await User.findByIdAndDelete(id)

    if (!deletedItem) {
        return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    return NextResponse.json({message: 'User deleted'})
}