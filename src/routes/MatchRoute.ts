import express from  'express';
import MatchController from '../controllers/MatchController'

const router=express.Router();

router.post("/find-match./:user-id",MatchController);
router.post("/search-match-request/:user-id",MatchController);
export default router;