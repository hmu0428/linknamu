import { LinkItem, Profile } from "@/types";

export const profile: Profile = {
  name: "황민우",
  bio: "풀스택 개발자 | 요즘엔 AI 개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 GitHub", url: "https://github.com/hmu0428" },
  { id: "blog", label: "📝 블로그", url: "https://blog.naver.com/hmu0428" },
  { id: "email", label: "📧 이메일", url: "mailto:hmu0428@gmail.com" },
];
