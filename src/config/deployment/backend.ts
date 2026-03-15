import type {
  DeploymentBlockData,
  DeploymentLine,
  DeploymentMode,
  DeploymentTag,
  DeploymentTranslation,
} from "./types";

function createTag(label: string, tone: DeploymentTag["tone"] = "neutral"): DeploymentTag {
  return {
    label,
    tone,
  };
}

function createLine(kind: DeploymentLine["kind"], value: string): DeploymentLine {
  return {
    kind,
    value,
  };
}

export function createBackendDeploymentData(t: DeploymentTranslation): DeploymentBlockData {
  const globalTags: ReadonlyArray<DeploymentTag> = [
    createTag(t("tags.node"), "accent"),
    createTag(t("tags.postgresql"), "success"),
    createTag(t("tags.redis"), "warning"),
    createTag(t("tags.rabbitmq"), "neutral"),
  ];

  const modes: ReadonlyArray<DeploymentMode> = [
    {
      id: "local",
      label: t("modes.local.label"),
      description: t("modes.local.description"),
      fileName: "backend.local.sh",
      tags: [
        createTag(t("tags.node"), "accent"),
        createTag(t("tags.migrations"), "success"),
        createTag(t("tags.api"), "neutral"),
      ],
      lines: [
        createLine("comment", t("modes.local.lines.comment")),
        createLine("command", "npm install"),
        createLine("command", "npm run db:migrate"),
        createLine("command", "npm run dev"),
        createLine("output", t("modes.local.lines.output1")),
        createLine("success", t("modes.local.lines.success")),
      ],
    },
    {
      id: "docker",
      label: t("modes.docker.label"),
      description: t("modes.docker.description"),
      fileName: "backend.docker.sh",
      tags: [
        createTag(t("tags.docker"), "warning"),
        createTag(t("tags.compose"), "accent"),
        createTag(t("tags.sharedServices"), "neutral"),
      ],
      lines: [
        createLine("comment", t("modes.docker.lines.comment")),
        createLine("command", "docker compose -f docker-compose.backend.yml up --build"),
        createLine("output", t("modes.docker.lines.output1")),
        createLine("output", t("modes.docker.lines.output2")),
        createLine("output", t("modes.docker.lines.output3")),
        createLine("success", t("modes.docker.lines.success")),
      ],
    },
    {
      id: "demo",
      label: t("modes.demo.label"),
      description: t("modes.demo.description"),
      fileName: "backend.demo.sh",
      tags: [
        createTag(t("tags.demo"), "accent"),
        createTag(t("tags.preview"), "neutral"),
        createTag(t("tags.api"), "success"),
      ],
      lines: [
        createLine("comment", t("modes.demo.lines.comment")),
        createLine("command", "./deploy.sh --target backend --env demo"),
        createLine("output", t("modes.demo.lines.output1")),
        createLine("output", t("modes.demo.lines.output2")),
        createLine("success", t("modes.demo.lines.success")),
      ],
    },
    {
      id: "production",
      label: t("modes.production.label"),
      description: t("modes.production.description"),
      fileName: "deploy.sh",
      tags: [
        createTag(t("tags.production"), "warning"),
        createTag(t("tags.ci"), "accent"),
        createTag(t("tags.release"), "success"),
      ],
      lines: [
        createLine("comment", t("modes.production.lines.comment")),
        createLine("command", "./deploy.sh --target backend --env production"),
        createLine("output", t("modes.production.lines.output1")),
        createLine("output", t("modes.production.lines.output2")),
        createLine("output", t("modes.production.lines.output3")),
        createLine("success", t("modes.production.lines.success")),
      ],
    },
  ];

  return {
    title: t("title"),
    description: t("description"),
    tags: globalTags,
    modes,
  };
}
