import { Profile } from "@/types";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{profile.name}</h1>
        <p className="text-sm opacity-60">{profile.bio}</p>
      </div>
    </div>
  );
}
