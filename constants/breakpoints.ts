/**
 * These are the breakpoints used in the application.
 */
export const Breakpoints: Record<string, number> = {
    "sm": 320,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536
};

/**
 * These are the breakpoints used in the application in pixels.
 */
export const BreakpointsPixels: Record<string, string> = Object.keys(Breakpoints).reduce(
    (acc, key) => ({...acc, [key]: `${Breakpoints[key]}px`}),
    {}
);
