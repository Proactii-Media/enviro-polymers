import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`py-14 sm:py-16 ${className}`}>{children}</section>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      {eyebrow ? (
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-900">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function LandingHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/70 to-slate-950/90" />
      </div>

      <Container>
        <div className="relative z-10 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-md active:translate-y-0"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-0"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InfoGrid({
  items,
}: {
  items: Array<{ title: string; description: string; icon?: string }>;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
        >
          {item.icon ? (
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-800">
              {item.icon}
            </div>
          ) : null}
          <h3 className="text-base font-semibold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ProductCardGrid({
  items,
}: {
  items: Array<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
        >
          <div className="relative aspect-16/10">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-6">
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatsGrid({
  items,
}: {
  items: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-white p-6 shadow-sm sm:grid-cols-4 sm:gap-6 sm:p-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
        >
          <div className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {item.value}
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function BadgeGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              ✓
            </span>
            <p className="text-sm font-semibold text-slate-900">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-emerald-200/60 bg-linear-to-r from-emerald-700 via-emerald-600 to-emerald-700 p-8 shadow-lg sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </div>
            <div className="flex">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md active:translate-y-0"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

