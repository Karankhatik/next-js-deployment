import { readFile } from 'fs/promises';
import path from 'path';

export async function getFileContent() {
  const filePath = path.join(process.cwd(), 'public', 'file.txt');
  try {
    const fileContent = await readFile(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}