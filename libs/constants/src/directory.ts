import { join } from 'path';

export const ROOT_DIR = join(__dirname, '../../../', '');

// typeHelper.ts
export const spriteRootDirectory = join(ROOT_DIR, 'libs/assets/src/sprites');
export const svgRootDirectory = join(ROOT_DIR, 'libs/assets/src/svgs');
export const assetTypeHelperPath = join(
  ROOT_DIR,
  'libs/assets/dist/type/assetTypeHelper.ts',
);
