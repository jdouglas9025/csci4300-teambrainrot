import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "../../../../../lib/mongodb";
import {UserSchema} from '../../../../../models/UserSchema'

interface RouteParams {
    params: {
        id: string
    }
}

// Get user
export async function GET(request: NextRequest, routeParams: RouteParams) {
    const id = routeParams.params.id;

    await connectMongoDB()
    const user = await UserSchema.findById(id)

    return NextResponse.json({user})
}

// Update a specific user
export async function PUT(request: NextRequest, routeParams: RouteParams) {
    const id = routeParams.params.id;

    const {email, password} = await request.json()
    await connectMongoDB()
    await UserSchema.findByIdAndUpdate(id, {
        email: email,
        password: password
    })

    return NextResponse.json({message: 'User updated'})
}

// Delete a user
export async function DELETE(routeParams: RouteParams) {
    const id = routeParams.params.id;
    await connectMongoDB()
    const deletedItem = await UserSchema.findByIdAndDelete(id)

    if (!deletedItem) {
        return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    return NextResponse.json({message: 'User deleted'})
}