import { TINA_COMPONENTS } from "config";
import parse from "html-react-parser";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Text } from "ui";
import { client } from "../../../tina/__generated__/client";

type PageProps = {
  params: {
    page: string;
  };
  searchParams: Record<any, any>;
};

async function getPageData(pageSlug: string) {
  return client.queries.page({ relativePath: `${pageSlug}.mdx` });
}

export async function generateMetadata({ params: { page } }: PageProps) {
  const { data } = await getPageData(page);
  return {
    title: data.page.title,
    description: data.page.description?.join(" "),
  };
}

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
