/**
 * Detects if hardware acceleration is available
 * @returns {boolean} True if GPU acceleration is likely available
 */
export function hasHardwareAcceleration(): boolean {
  if (typeof window === 'undefined') return true;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) return false;
    
    // Check if it's using software rendering
    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Software renderers usually contain these keywords
      const isSoftwareRenderer = /SwiftShader|llvmpipe|software|mesa/i.test(renderer);
      return !isSoftwareRenderer;
    }
    
    return true; // WebGL available, assume hardware acceleration
  } catch (e) {
    return true; // Default to true to avoid breaking on errors
  }
}

/**
 * Checks if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Determines if heavy visual effects should be enabled
 * @returns {boolean} True if heavy effects can be enabled
 */
export function shouldEnableHeavyEffects(): boolean {
  if (typeof window === 'undefined') return true;
  
  return (
    !prefersReducedMotion() &&
    hasHardwareAcceleration() &&
    (navigator.hardwareConcurrency || 2) >= 2 // At least 2 CPU cores
  );
}

/**
 * Performance level for adaptive rendering
 * @returns {'high' | 'medium' | 'low'} Performance level
 */
export function getPerformanceLevel(): 'high' | 'medium' | 'low' {
  if (typeof window === 'undefined') return 'high';
  
  const hasGPU = hasHardwareAcceleration();
  const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores
  const reducedMotion = prefersReducedMotion();
  
  if (reducedMotion) return 'low';
  if (!hasGPU && cores < 4) return 'low';
  if (cores >= 4 && hasGPU) return 'high';
  return 'medium';
}
