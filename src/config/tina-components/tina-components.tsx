import { Image } from "components";
import { ImageProps } from "next/image";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Banner, BannerProps } from "ui";

export const TINA_COMPONENTS = {
  Banner: ({
    children,
    variant,
  }: Pick<BannerProps, "variant"> & {
    children: TinaMarkdownContent | TinaMarkdownContent[];
  }) => (
    <Banner variant={variant}>
      <TinaMarkdown content={children} />
    </Banner>
  ),
  Image: ({ alt, ...props }: ImageProps) => (
    <Image alt={alt ?? ""} {...props} />
  ),
};
