import { Hono } from 'hono';
import { Bindings } from '../app';

const chunk = new Hono<{ Bindings: Bindings }>();

chunk.get('/', (c) => {
	return c.json({ response: 'Hello this is BIG CHUNKKKK' });
});

export { chunk };
