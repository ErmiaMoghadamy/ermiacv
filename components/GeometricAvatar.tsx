import Image from 'next/image';

type GeometricAvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function GeometricAvatar({
  src,
  alt,
  size = 240,
}: GeometricAvatarProps) {
  return (
    <div className="relative isolate">
      <div className="absolute -inset-6 -z-10 opacity-90">
        <div className="absolute left-6 top-2 h-56 w-56 rotate-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/10 to-transparent blur-2xl" />
        <div className="absolute -bottom-2 right-0 h-52 w-52 -rotate-12 rounded-[2.5rem] bg-gradient-to-br from-pink-500/20 via-indigo-500/10 to-transparent blur-2xl" />
      </div>

      <div
        className="relative overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
        style={{
          width: size,
          height: size,
          clipPath:
            'polygon(10% 7%, 74% 0%, 100% 22%, 93% 86%, 55% 100%, 10% 92%, 0% 52%)',
          borderRadius: '28px',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.14),transparent_60%)]" />
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      </div>

      <div
        className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 border border-white/10 bg-black/30 backdrop-blur"
        style={{
          clipPath: 'polygon(50% 0%, 100% 28%, 79% 100%, 21% 100%, 0% 28%)',
          borderRadius: '20px',
        }}
      />
    </div>
  );
}
