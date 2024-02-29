import { TINA_COMPONENTS } from "config";
import parse from "html-react-parser";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Text } from "ui";
import { client } from "../../tina/__generated__/client";

async function getPageData() {
  return client.queries.page({ relativePath: "home/index.mdx" });
}

export default async function Home() {
  const { data } = await getPageData();

  return (
    <>
      <Text variant="title">{data.page.title}</Text>

      {data.page.description?.map(
        (desc) =>
          desc && (
            <Text key={desc} variant="subtitle">
              {parse(desc)}
            </Text>
          ),
      )}

      <TinaMarkdown components={TINA_COMPONENTS} content={data.page.body} />
    </>
  );
}
