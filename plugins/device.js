export default function (ctx, inject) {
  const userAgent = ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;
  const customIsTabet =
    ctx.isTablet || (userAgent && userAgent.includes("iPad"));

  inject("device", {
    env: ctx.isDev,
    isTablet: customIsTabet,
    isMobile: ctx.isMobile,
    isMobileOrTablet: ctx.isMobileOrTablet,
    isDesktop: !ctx.isMobileOrTablet,
    isIos: ctx.isIos,
    isWindows: ctx.isWindows,
    isMacOS: ctx.isMacOS,
    isDesktopOrTablet: !ctx.isMobile,
    isAndroid: ctx.isMobileOrTablet && !ctx.isIos
  });
}
