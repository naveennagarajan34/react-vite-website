import React, { useRef, useState, useEffect } from 'react';

/**
 * ScrollReveal Component
 * Smooth, 60fps GPU-accelerated scroll-triggered reveal animation using IntersectionObserver
 */
export const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up' | 'scale-up' | 'glow-reveal'
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  once = true,
  margin = '-40px',
  as: Component = 'div',
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: margin,
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, margin]);

  let transformHidden = `translate3d(0, ${yOffset}px, 0)`;
  let transformVisible = 'translate3d(0, 0, 0)';

  if (animation === 'scale-up') {
    transformHidden = `translate3d(0, ${yOffset}px, 0) scale(0.96)`;
    transformVisible = 'translate3d(0, 0, 0) scale(1)';
  }

  const baseStyle = {
    transitionProperty: 'opacity, transform, box-shadow, filter',
    transitionDuration: `${duration}s`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // smooth easeOut
    transitionDelay: `${delay}s`,
    willChange: 'opacity, transform',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? transformVisible : transformHidden,
  };

  const glowClass = (animation === 'glow-reveal' && isVisible) 
    ? 'animate-subtle-glow-pulse' 
    : '';

  return (
    <Component
      ref={ref}
      style={baseStyle}
      className={`${className} ${glowClass}`}
      {...props}
    >
      {children}
    </Component>
  );
};
