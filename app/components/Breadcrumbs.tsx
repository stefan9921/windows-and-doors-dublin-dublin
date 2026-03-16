import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
      <Link className="hover:text-primary" href="/">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          {item.href ? (
            <Link className="hover:text-primary" href={item.href}>{item.name}</Link>
          ) : (
            <span className="text-primary font-bold">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
