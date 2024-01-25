import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: "guilherme"}];
    res.status(200).json(users);
})

usersRoute.get('/users/:id', (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    res.status(200).send({id});
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(201).send(newUser);
})

usersRoute.put('/users/:id', (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const editedUser = req.body;
    editedUser.id = id;
    res.status(201).send({editedUser});
})

usersRoute.delete('/users/:id', (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    res.status(204).send();
})


export default usersRoute;