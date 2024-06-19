import { Hono } from 'hono';

type Bindings = {
	AI: Ai;
};

const app = new Hono<{ Bindings: Bindings }>();

app.post('/', async (c) => {
	const { context, query } = await c.req.json();
	const responseBody = await c.env.AI.run('@cf/meta/llama-3-8b-instruct', {
		prompt: `${context} ${query}`,
	});

	return c.json(responseBody);
});

export default app;
