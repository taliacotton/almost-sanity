import { createClient, type ClientConfig } from "@sanity/client";

const currentDate = new Date();
const formattedDate = new Date().toISOString().slice(0, 10);

const config: ClientConfig = {
  projectId: "oogp23sh",
  dataset: "production",
  apiVersion: formattedDate,
  useCdn: process.env.revalidateSecret ? false : true,
};

const client = createClient(config);

export const revalidate = 10;

export default client;
