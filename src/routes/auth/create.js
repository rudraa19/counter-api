import Elysia from 'elysia'

export const CreateUserRouter = new Elysia().post(
	'',
	async ({ cookie }) => {
		const account = new Account(client)
		const user = await account.createAnonymousSession()

		cookie.sessionId.value = user.$id
		cookie.userId.value = user.userId

		return {
			error: false,
			message: 'User Created',
			data: {
				userId: user.userId,
				sessionId: user.$id,
			},
		}
	},
	{
		response: {
			200: Responses.ConstructSuccessResponseSchema(
				t.Object({
					userId: t.String(),
					sessionId: t.String(),
				}),
			),
		},
	},
)
