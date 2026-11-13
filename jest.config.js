import { getJestProjects } from '@nx/jest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  projects: getJestProjects(),
};

