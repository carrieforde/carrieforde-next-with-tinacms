import NextLink from "next/link";
import { Text } from "ui";
import { Logo } from "../logo/logo";
import s from "./site-branding.module.css";

export const SiteBranding: React.FC = () => (
  <div className={s.siteBranding}>
    <NextLink href="/">
      <Logo />
    </NextLink>
    <Text className={s.siteTitle}>Carrie Forde</Text>
  </div>
);
