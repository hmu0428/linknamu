import { Profile } from "@/types";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full shadow-[0_12px_30px_-8px_rgba(194,110,50,0.45)] ring-4 ring-white/80 dark:ring-white/10 dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-sm text-foreground/70">{profile.bio}</p>
      </div>
    </div>
  );
}
