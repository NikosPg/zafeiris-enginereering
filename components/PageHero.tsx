export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-brand-100">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
