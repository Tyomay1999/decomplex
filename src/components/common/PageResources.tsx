"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type PageResourcesProps = {
  liveUrl?: string;
  repoUrl?: string;
  apkUrl?: string;
  showDocTrail?: boolean;
  docHref?: string;
  currentLabel?: string;
};

function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

function externalAttrs(url: string): { target?: "_blank"; rel?: string } {
  if (!isExternal(url)) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}

export default function PageResources({
  liveUrl,
  repoUrl,
  apkUrl,
  showDocTrail = false,
  docHref = "/",
  currentLabel,
}: PageResourcesProps): JSX.Element {
  const t = useTranslations("common.pageResources");

  const hasLinks = Boolean(liveUrl || repoUrl || apkUrl);
  const docIsExternal = isExternal(docHref);

  return (
    <div className="dc-page-meta">
      {showDocTrail ? (
        <nav className="dc-page-meta__trail" aria-label={t("ariaTrail")}>
          {docIsExternal ? (
            <a
              href={docHref}
              className="dc-page-meta__trailLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("documentation")}
            </a>
          ) : (
            <Link href={docHref} className="dc-page-meta__trailLink">
              {t("documentation")}
            </Link>
          )}
          <span className="dc-page-meta__sep">/</span>
          <span className="dc-page-meta__current">{currentLabel ?? t("current")}</span>
        </nav>
      ) : (
        <div />
      )}

      {hasLinks ? (
        <div className="dc-page-meta__links" aria-label={t("ariaLinks")}>
          {liveUrl ? (
            <a className="dc-page-meta__link" href={liveUrl} {...externalAttrs(liveUrl)}>
              {t("live")}
            </a>
          ) : null}

          {liveUrl && (repoUrl || apkUrl) ? <span className="dc-page-meta__dot">•</span> : null}

          {repoUrl ? (
            <a className="dc-page-meta__link" href={repoUrl} {...externalAttrs(repoUrl)}>
              {t("github")}
            </a>
          ) : null}

          {repoUrl && apkUrl ? <span className="dc-page-meta__dot">•</span> : null}

          {apkUrl ? (
            <a className="dc-page-meta__link" href={apkUrl} {...externalAttrs(apkUrl)} download>
              {t("apk")}
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
