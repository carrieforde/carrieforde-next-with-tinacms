/* eslint-disable no-underscore-dangle */
import { client } from "../../../../tina/__generated__/client";

export async function generateStaticParams() {
  const posts = await client.queries.postConnection();

  return posts.data.postConnection.edges?.map((post) => {
    if (post?.node?._sys.relativePath) {
      const [filename] = post.node._sys.relativePath.split(".");

      return {
        params: {
          slug: filename,
        },
      };
    }

    return null;
  });
}

export default function Post(props: any) {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
}
