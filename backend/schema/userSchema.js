import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
})

export const User = mongoose.model('User', userSchema)
