import { useMediaQuery } from "@mui/material";

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  return "desktop";
};

// create a function to get the device screen size using media queries
const Display = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const colorMode = prefersDark ? "dark" : "light";
  return { isMobile, isTablet, isDesktop, colorMode };
}

export { deviceType, Display };