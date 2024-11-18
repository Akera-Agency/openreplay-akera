import type { NavigationLink } from "@/constants/navigation";

// Utility to group navigation links by label
export const groupLinksByLabel = (links: NavigationLink[]) => {
  const groupedLinks: Record<string, NavigationLink[]> = {};
  let currentLabel = "";

  links.forEach((link) => {
    if (link.label) {
      currentLabel = link.label;
      groupedLinks[currentLabel] = [];
    } else if (currentLabel) {
      groupedLinks[currentLabel].push(link);
    }
  });

  return groupedLinks;
};
