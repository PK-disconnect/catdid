export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-2">
      <div className="neu-card p-8 sm:p-12 text-center">
        <span className="neu-chip mb-4 font-mono uppercase tracking-wider">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-ink-soft max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
