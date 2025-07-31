import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'db.json');

export const readContacts = async () => {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
};

export const writeContacts = async (contacts) => {
  await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');
};
