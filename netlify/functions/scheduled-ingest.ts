import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { schedule } from "@netlify/functions";

const handler: Handler = schedule("0 6 * * *", async (event: HandlerEvent, context: HandlerContext) => {
  const siteUrl = process.env.URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    console.error("SCHEDULED INGEST: URL environment variable not set");
    return { statusCode: 500 };
  }
  try {
    const response = await fetch(`${siteUrl}/api/cron/ingest`, {
      method: "GET",
      headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
    });
    const data = await response.json();
    console.log("SCHEDULED INGEST RESULT:", JSON.stringify(data));
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    console.error("SCHEDULED INGEST ERROR:", error);
    return { statusCode: 500 };
  }
});

export { handler };
