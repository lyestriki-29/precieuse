import { notFound } from "next/navigation";

const SUPPORTED = ["fr"] as const;

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!(SUPPORTED as readonly string[]).includes(locale)) {
    notFound();
  }
  return <div data-locale={locale}>{children}</div>;
}
