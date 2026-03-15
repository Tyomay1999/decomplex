export type DeploymentTagTone = "neutral" | "accent" | "success" | "warning";

export interface DeploymentTag {
  label: string;
  tone?: DeploymentTagTone;
}

export type DeploymentLineKind = "comment" | "command" | "output" | "success";

export interface DeploymentLine {
  kind: DeploymentLineKind;
  value: string;
}

export interface DeploymentMode {
  id: string;
  label: string;
  description?: string;
  fileName?: string;
  tags?: ReadonlyArray<DeploymentTag>;
  lines: ReadonlyArray<DeploymentLine>;
}

export interface DeploymentBlockData {
  title: string;
  description?: string;
  tags?: ReadonlyArray<DeploymentTag>;
  modes: ReadonlyArray<DeploymentMode>;
}

export type DeploymentTranslation = (key: string) => string;
