import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black/[.02] px-4 py-10 dark:bg-white/[.02]">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-[2.5rem] border border-black/10 bg-background px-6 py-12 dark:border-white/10">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
