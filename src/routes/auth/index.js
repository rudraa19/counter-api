import Elysia from 'elysia'
import { CreateUserRouter } from './create'

export const AuthRouter = new Elysia({
	prefix: '/auth',
}).use(CreateUserRouter)
