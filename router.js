import express, { Router } from 'express';
// indexアクションをコントローラからimport
import { index } from './places';

// ルータを初期化
const router = Router();

// /places.jsonのルートをindexアクションで処理
router.route('/places.json')
  .get(index);

export default router;