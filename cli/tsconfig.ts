import * as jsonfile from 'jsonfile';
import { join } from 'path';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as tsconfig from '../tsconfig.json';

const content = tsconfig;
content.compilerOptions.outDir = '.tmp';
Object.assign(content, { include: ['src/**/*'] });

const filePath = join(process.cwd(), 'tsconfig.build.json');
jsonfile.writeFile(filePath, content, { spaces: 2 }, (err) => {
  if (err === null) {
    process.exit(0);
  } else {
    console.error('Failed to generate the tsconfig.build.json', err);
    process.exit(1);
  }
});
