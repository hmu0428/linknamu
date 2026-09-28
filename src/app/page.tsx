import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-20 sm:px-10">
      <DarkModeToggle />
      <div className="flex w-full max-w-[22rem] flex-col items-center gap-12">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
