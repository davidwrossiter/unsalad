import { Hono } from 'hono';
import type { Bindings } from './app';

// Routes
import { chunk } from './routes/chunk';
import { query } from './routes/query';

const app = new Hono<{ Bindings: Bindings }>();

app.route('/chunk', chunk);
app.route('/query', query);

export default app;
