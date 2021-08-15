import React from "react";

export interface ProjectCardActions {
  url?: string;
  title: string;
}

export interface ProjectCardThumbnail {
  url: string;
  title: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Array<string>;
  year: string;
  actions: Array<ProjectCardActions>;
  thumbnail?: ProjectCardThumbnail;
  className?: string;
}

declare const ProjectCard: React.FunctionComponent<ProjectCardProps>;

export default ProjectCard;
