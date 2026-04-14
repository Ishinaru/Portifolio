export default function SkeletonCard({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col h-[550px] bg-surface-variant ${
        featured ? 'md:col-span-8' : 'md:col-span-4'
      }`}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 skeleton-shimmer" />

      <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12 gap-4">
        {/* Badge row */}
        <div className="flex gap-2 mb-2">
          <div className="h-6 w-16 rounded-full bg-white/10 skeleton-shimmer" />
          <div className="h-6 w-20 rounded-full bg-white/10 skeleton-shimmer" />
        </div>
        {/* Title */}
        <div className={`h-8 rounded-xl bg-white/10 skeleton-shimmer ${featured ? 'w-3/4' : 'w-2/3'}`} />
        {/* Description lines */}
        <div className="space-y-2 mb-4">
          <div className="h-4 rounded-lg bg-white/5 skeleton-shimmer w-full" />
          <div className="h-4 rounded-lg bg-white/5 skeleton-shimmer w-5/6" />
          <div className="h-4 rounded-lg bg-white/5 skeleton-shimmer w-4/6" />
        </div>
        {/* Footer */}
        <div className="flex items-center gap-4">
          <div className="h-5 w-24 rounded-lg bg-white/10 skeleton-shimmer" />
          <div className="ml-auto h-5 w-10 rounded-lg bg-white/10 skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}
