"use client";

import type { JSX } from "react";
import { useMemo, useState } from "react";
import type {
  DeploymentBlockData,
  DeploymentLine,
  DeploymentMode,
  DeploymentTag,
} from "../../../config/deployment/types";

type DeploymentBlockProps = {
  data: DeploymentBlockData;
};

function getTagToneClassName(tone: DeploymentTag["tone"]): string {
  if (tone === "accent") {
    return "dc-deployment__tag dc-deployment__tag--accent";
  }

  if (tone === "success") {
    return "dc-deployment__tag dc-deployment__tag--success";
  }

  if (tone === "warning") {
    return "dc-deployment__tag dc-deployment__tag--warning";
  }

  return "dc-deployment__tag dc-deployment__tag--neutral";
}

function getSelectorClassName(isActive: boolean): string {
  return isActive
    ? "dc-deployment__modeButton dc-deployment__modeButton--active"
    : "dc-deployment__modeButton";
}

function renderLine(line: DeploymentLine, index: number): JSX.Element {
  if (line.kind === "comment") {
    return (
      <p key={`${line.kind}-${index}`} className="dc-deployment__line dc-deployment__line--comment">
        # {line.value}
      </p>
    );
  }

  if (line.kind === "command") {
    return (
      <p key={`${line.kind}-${index}`} className="dc-deployment__line dc-deployment__line--command">
        <span className="dc-deployment__prompt">$</span> {line.value}
      </p>
    );
  }

  if (line.kind === "success") {
    return (
      <p key={`${line.kind}-${index}`} className="dc-deployment__line dc-deployment__line--success">
        [✓] {line.value}
      </p>
    );
  }

  return (
    <p key={`${line.kind}-${index}`} className="dc-deployment__line dc-deployment__line--output">
      {line.value}
    </p>
  );
}

export default function DeploymentBlock({ data }: DeploymentBlockProps): JSX.Element {
  const initialModeId = useMemo<string>(() => data.modes[0]?.id ?? "", [data.modes]);
  const [activeModeId, setActiveModeId] = useState<string>(initialModeId);

  const activeMode: DeploymentMode =
    data.modes.find((mode) => mode.id === activeModeId) ?? data.modes[0];

  return (
    <section className="mb-12" aria-labelledby="deployment-block-title">
      <div className="dc-deployment__header">
        <div>
          <h2
            id="deployment-block-title"
            className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3"
          >
            {data.title}
          </h2>

          {data.description ? (
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {data.description}
            </p>
          ) : null}
        </div>

        {data.tags && data.tags.length > 0 ? (
          <div className="dc-deployment__tags" aria-label={data.title}>
            {data.tags.map((tag) => (
              <span key={tag.label} className={getTagToneClassName(tag.tone)}>
                {tag.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {data.modes.length > 1 ? (
        <div className="dc-deployment__modeList" role="tablist" aria-label={data.title}>
          {data.modes.map((mode) => {
            const isActive = mode.id === activeMode.id;

            return (
              <button
                key={mode.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={getSelectorClassName(isActive)}
                onClick={() => setActiveModeId(mode.id)}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="dc-deployment__surface">
        <div className="dc-deployment__meta">
          <div>
            <h3 className="dc-deployment__modeTitle">{activeMode.label}</h3>
            {activeMode.description ? (
              <p className="dc-deployment__modeDescription">{activeMode.description}</p>
            ) : null}
          </div>

          {activeMode.tags && activeMode.tags.length > 0 ? (
            <div className="dc-deployment__tags">
              {activeMode.tags.map((tag) => (
                <span key={tag.label} className={getTagToneClassName(tag.tone)}>
                  {tag.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="dc-deployment__terminal">
          <div className="dc-deployment__terminalTop">
            <div className="dc-deployment__trafficLights" aria-hidden="true">
              <span className="dc-deployment__trafficLight dc-deployment__trafficLight--red" />
              <span className="dc-deployment__trafficLight dc-deployment__trafficLight--amber" />
              <span className="dc-deployment__trafficLight dc-deployment__trafficLight--green" />
            </div>

            {activeMode.fileName ? (
              <span className="dc-deployment__fileName">{activeMode.fileName}</span>
            ) : null}
          </div>

          <div className="dc-deployment__terminalBody">
            {activeMode.lines.map((line, index) => renderLine(line, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
