import { Hono } from 'hono';
import type { Bindings } from './app';
import { chunk } from './routes/chunk';

const app = new Hono<{ Bindings: Bindings }>();

app.route('/chunk', chunk);

export default app;
