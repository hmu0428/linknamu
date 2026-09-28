import { LinkItem, Profile } from "@/types";

export const profile: Profile = {
  name: "황민우",
  bio: "소프트웨어 개발자",
  avatarUrl: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", label: "Blog", url: "https://example.com/blog" },
];
