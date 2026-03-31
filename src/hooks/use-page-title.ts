import { useEffect } from "react";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | DoubleBridge Technologies`
      : "DoubleBridge Technologies";
  }, [title]);
}
