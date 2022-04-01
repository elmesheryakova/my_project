export default function (ctx, inject) {
  const userAgent = ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;
  const customIsTabet =
    ctx.$device.isTablet || (userAgent && userAgent.includes("iPad"));

  inject("device", {
    env: ctx.$device.isDev,
    isTablet: customIsTabet,
    isMobile: ctx.$device.isMobile,
    isMobileOrTablet: ctx.$device.isMobileOrTablet,
    isDesktop: !ctx.$device.isMobileOrTablet,
    isIos: ctx.$device.isIos,
    isWindows: ctx.$device.isWindows,
    isMacOS: ctx.$device.isMacOS,
    isSafari: ctx.$device.isSafari,
    isDesktopOrTablet: !ctx.$device.isMobile,
    isAndroid: ctx.$device.isMobileOrTablet && !ctx.$device.isIos
  });
}
