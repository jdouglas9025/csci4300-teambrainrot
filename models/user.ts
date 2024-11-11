import mongoose, { Schema, Document, Model } from "mongoose"

interface User extends Document {
    // Unique ID auto-generated by DB
    email: string
    password: string
    // Additional attributes as needed...
}

const userSchema = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Construct the model and export it
const User: Model<User> = mongoose.models.User || mongoose.model<User>("User", userSchema)

export { User }