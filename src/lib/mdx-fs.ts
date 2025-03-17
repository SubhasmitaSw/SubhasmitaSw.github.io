// src/lib/mdx-fs.ts
import fs from 'fs';
import path from 'path';
import { Talk } from '@/types';
import { parseTalksFromMdx } from './parseTalks';

export async function getMdxFromFileSystem(filePath: string): Promise<string> {
  try {
    // Convert relative path to absolute path
    const absolutePath = path.join(process.cwd(), filePath);
    
    // Read file from file system
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading MDX file ${filePath}:`, error);
    return '';
  }
}

export async function getTalksFromFileSystem(filePath: string): Promise<Talk[]> {
  try {
    const content = await getMdxFromFileSystem(filePath);
    if (!content) {
      return [];
    }
    
    return parseTalksFromMdx(content);
  } catch (error) {
    console.error('Error parsing talks from MDX file:', error);
    return [];
  }
}