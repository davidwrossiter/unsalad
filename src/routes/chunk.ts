import { Hono } from 'hono';
import { Bindings } from '../app';

const chunk = new Hono<{ Bindings: Bindings }>();

chunk.post('/', (c) => {
	return c.json({ response: 'Hello this is the BIG CHUNKKKK' });
});

export { chunk };
