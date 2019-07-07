import mongoose, { Schema } from 'mongoose';

// スキーマを定義
var placeSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  country: String,
  image: String,
  year: String,
});

// モデルをexport
export default mongoose.model('place', placeSchema);