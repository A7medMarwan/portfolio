/**
 * Performance monitoring utilities
 */

/**
 * Log component render performance
 */
export const logPerformance = (componentName: string, startTime: number): void => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    if (renderTime > 16) { // Slower than 60fps
        console.warn(`${componentName} render took ${renderTime.toFixed(2)}ms`);
    }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};
