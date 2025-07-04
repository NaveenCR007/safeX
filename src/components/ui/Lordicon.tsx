// LordIcon.tsx
import React, { useEffect, useRef } from 'react';

// Define props interface for lord-icon
interface LordIconProps {
  src: string;
  trigger?: 'hover' | 'click' | 'loop' | 'morph' | 'boomerang' | 'loop-on-hover';
  colors?: string;
  delay?: string | number;
  stroke?: string | number;
  scale?: string | number;
  state?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// React wrapper component for lord-icon
const LordIcon: React.FC<LordIconProps> = ({
  src,
  trigger = 'hover',
  colors,
  delay,
  stroke,
  scale,
  state,
  loading,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure lord-icon script is loaded
    if (!window.customElements.get('lord-icon')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.lordicon.com/lordicon.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Create the lord-icon element using React.createElement
  return React.createElement('lord-icon', {
    ref: iconRef,
    src,
    trigger,
    colors,
    delay,
    stroke,
    scale,
    state,
    loading,
    style,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
  });
};

export default LordIcon;