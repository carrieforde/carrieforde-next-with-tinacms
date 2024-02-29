import { TINA_COMPONENTS } from "config";
import parse from "html-react-parser";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Text } from "ui";
import { client } from "../../../tina/__generated__/client";

async function getPageData(pageSlug: string) {
  return client.queries.page({ relativePath: `${pageSlug}.mdx` });
}

type PageProps = {
  params: {
    page: string;
  };
  searchParams: Record<any, any>;
};

export default async function PagesPage({ params: { page } }: PageProps) {
  const { data } = await getPageData(page);

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
