import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {gallery.map((item, i) => (
        <figure
          key={i}
          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-100">
              {item.category}
            </p>
            <p className="text-sm font-bold text-white">{item.title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
