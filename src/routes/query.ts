import { Hono } from 'hono';
import { Bindings } from '../app';

const query = new Hono<{ Bindings: Bindings }>();

query.post('/', async (c) => {
	const { context, query } = await c.req.json();
	const responseBody = await c.env.AI.run('@cf/meta/llama-3-8b-instruct', {
		prompt: `${context} ${query}`,
	});

	return c.json(responseBody);
});

export { query };
