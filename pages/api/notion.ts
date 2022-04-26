// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client'

const API_KEY: string = 'secret_phiJQbbenvizXEF8CmGQMQf7oLKFPjwEqnsmfqILspr';
const SKILLS_DATABASE_ID: string = '0bfc5d164e714a939b0c0be8ff86c1a5'

const notion = new Client({ auth: API_KEY });

const fetchDatabase = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({
      database_id: SKILLS_DATABASE_ID,
    });
    return response.results;
  } catch (error) {
    throw error;
  }
}

const fetchSkills = () => fetchDatabase(SKILLS_DATABASE_ID);

export default { fetchSkills }