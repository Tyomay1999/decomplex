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

export function createAdminDeploymentData(t: DeploymentTranslation): DeploymentBlockData {
  const globalTags: ReadonlyArray<DeploymentTag> = [
    createTag(t("tags.react"), "accent"),
    createTag(t("tags.vite"), "success"),
    createTag(t("tags.local"), "neutral"),
    createTag(t("tags.docker"), "warning"),
  ];

  const modes: ReadonlyArray<DeploymentMode> = [
    {
      id: "local",
      label: t("modes.local.label"),
      description: t("modes.local.description"),
      fileName: "admin.local.sh",
      tags: [
        createTag(t("tags.node"), "neutral"),
        createTag(t("tags.vite"), "success"),
        createTag(t("tags.devServer"), "accent"),
      ],
      lines: [
        createLine("comment", t("modes.local.lines.comment")),
        createLine("command", "npm install"),
        createLine("command", "npm run dev"),
        createLine("output", t("modes.local.lines.output1")),
        createLine("success", t("modes.local.lines.success")),
      ],
    },
    {
      id: "docker",
      label: t("modes.docker.label"),
      description: t("modes.docker.description"),
      fileName: "admin.docker.sh",
      tags: [
        createTag(t("tags.docker"), "warning"),
        createTag(t("tags.compose"), "accent"),
        createTag(t("tags.nginx"), "neutral"),
      ],
      lines: [
        createLine("comment", t("modes.docker.lines.comment")),
        createLine("command", "docker compose -f docker-compose.admin.yml up --build"),
        createLine("output", t("modes.docker.lines.output1")),
        createLine("output", t("modes.docker.lines.output2")),
        createLine("success", t("modes.docker.lines.success")),
      ],
    },
    {
      id: "demo",
      label: t("modes.demo.label"),
      description: t("modes.demo.description"),
      fileName: "admin.demo.sh",
      tags: [
        createTag(t("tags.demo"), "accent"),
        createTag(t("tags.preview"), "neutral"),
        createTag(t("tags.dashboard"), "success"),
      ],
      lines: [
        createLine("comment", t("modes.demo.lines.comment")),
        createLine("command", "./deploy.sh --target admin --env demo"),
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
        createLine("command", "./deploy.sh --target admin --env production"),
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
