// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const pageId = process.env.NOTION_PAGE_ID;
const API = process.env.NOTION_TOKEN;
const notion = new Client({ auth: API });

export default async (req, res) => {
  // const response = await notion.pages.retrieve({
  //   page_id: pageId,
  // });
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });
  const results = response.results;
  res.status(200).json({ results });
};
