import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    photo: String,
    name: String,
    email: String,
    age: String,
    gender: String,
    DOB: String,
    phoneNumber: String,
})

const ProfileModel = mongoose.model("ProfileModel",profileSchema);

export default ProfileModel;