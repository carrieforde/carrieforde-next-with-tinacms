import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "job",
        label: "Jobs",
        path: "content/jobs",
        fields: [
          {
            type: "string",
            name: "company",
            label: "Company",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "startDate",
            label: "Start Date",
            required: true,
          },
          {
            type: "datetime",
            name: "endDate",
            label: "End Date",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Position",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
            isBody: true,
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "datetime",
            name: "updated",
            label: "Updated",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [ "Development", "JavaScript", "WordPress"],
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            list: true,
          },
          {
            type: "boolean",
            name: "showToc",
            label: "Show Table of Contents",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Banner",
                label: "Banner",
                fields: [
                  {
                    name: "children",
                    label: "Content",
                    type: "rich-text"
                  },
                  {
                    name: "variant",
                    label: "Variant",
                    type: 'string',
                    options: ['info', 'warning', 'error', 'success'],
                  }
                ]
              }
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
