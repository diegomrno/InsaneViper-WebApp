import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
    check: '/check/:id',
    test: '/test'
} as const;


/**
 * Get all users.
 */
 router.get(p.get, async (_: Request, res: Response) => {
});

/**
 * RFID Api test
 */
 router.get(p.test, async (_: Request, res: Response) => {
     res.send("Hello");
     return res.status(OK).end();
});

/**
 * RFID Api test
 */
 router.get(p.check, async (req: Request, res: Response) => {
    res.send("Hello");
    return res.status(OK).end();
});

export default router;