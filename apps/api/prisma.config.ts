import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { defineConfig, env } from 'prisma/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootEnvPath = path.resolve(dirname, '../../.env');

dotenv.config({ path: rootEnvPath });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
