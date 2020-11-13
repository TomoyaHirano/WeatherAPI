import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    return res.status(OK).json({111:222});
});



/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
