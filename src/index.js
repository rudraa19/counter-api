import swagger from '@elysiajs/swagger'
import { Responses } from '@nexusog/golakost'
import { Elysia, t } from 'elysia'
import { Account, Client, Users } from 'node-appwrite'
import { AuthRouter } from './routes/auth'
const client = new Client()
	.setEndpoint(Bun.env.APPWRITE_ENDPOINT)
	.setProject(Bun.env.APPWRITE_PROJECT_ID)
	.setKey(Bun.env.APPWRITE_API_KEY)

const app = new Elysia()
	.use(swagger())
	.group('/api', (app) => app.use(AuthRouter))
	.listen(Bun.env.PORT)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
