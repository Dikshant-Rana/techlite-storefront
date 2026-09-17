import React, { useEffect, useRef } from "react";

interface EmployeeMarqueeProps {
  children: React.ReactNode[];
  speed?: number; // pixels per frame
  cardClassName?: string;
  className?: string;
}

export const EmployeeMarquee: React.FC<EmployeeMarqueeProps> = ({
  children,
  speed = 2.0,
  cardClassName = "w-[280px] sm:w-[320px]",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef<boolean>(false);
  const offsetRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Animation function
    const animate = () => {
      if (!isPausedRef.current && track) {
        // Half width of track corresponds to the width of one original set of items
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          offsetRef.current += speed;
          if (offsetRef.current >= halfWidth) {
            offsetRef.current = offsetRef.current % halfWidth;
          }
          track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    // Event handlers for pause/resume logic
    const pause = () => {
      isPausedRef.current = true;
    };

    const resume = () => {
      isPausedRef.current = false;
    };

    // Focusout check to ensure focus hasn't just moved to another card inside the marquee
    const handleFocusOut = (e: FocusEvent) => {
      if (container && !container.contains(e.relatedTarget as Node)) {
        resume();
      }
    };

    // Desktop hover listeners
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    // Mobile touch listeners - include touchcancel to fix "stuck mobile" glitch when scrolling vertically
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume, { passive: true });
    container.addEventListener("touchcancel", resume, { passive: true });

    // Accessibility keyboard focus listeners
    container.addEventListener("focusin", pause);
    container.addEventListener("focusout", handleFocusOut);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
      container.removeEventListener("touchcancel", resume);
      container.removeEventListener("focusin", pause);
      container.removeEventListener("focusout", handleFocusOut);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      aria-label="Employee Cards Marquee Ticker"
      role="region"
      tabIndex={0}
      className={`overflow-hidden relative w-full outline-none focus-visible:ring-2 focus-visible:ring-[#066291] rounded-2xl ${className}`}
    >
      <div
        ref={trackRef}
        className="flex gap-4 w-max will-change-transform py-3 px-2"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {/* First original set */}
        {children.map((child, index) => (
          <div key={`orig-${index}`} className={`${cardClassName} shrink-0`}>
            {child}
          </div>
        ))}
        {/* Duplicated set for seamless loop */}
        {children.map((child, index) => (
          <div key={`dup-${index}`} className={`${cardClassName} shrink-0`} aria-hidden="true">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
