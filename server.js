import express from 'express';
import mongoose from 'mongoose';
import router from './router';

// MongoDBに接続
mongoose.connect('mongodb://localhost/places');

// HTTPサーバを初期化
const app = express();

// v1プレフィックスを追加
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});