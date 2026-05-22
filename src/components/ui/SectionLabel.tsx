"use client";

import { useEffect, useRef, useState } from "react";

type SectionLabelProps = {
  children: React.ReactNode;
};

type RegisteredLabel = {
  element: HTMLDivElement;
  setActive: (value: boolean) => void;
};

const registeredLabels = new Map<symbol, RegisteredLabel>();

let animationFrameId: number | null = null;
let listenersAttached = false;

function updateActiveLabel() {
  animationFrameId = null;

  if (registeredLabels.size === 0) return;

  const viewportAnchor = window.innerHeight * 0.38;

  let closestId: symbol | null = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  registeredLabels.forEach(({ element }, id) => {
    const rect = element.getBoundingClientRect();

    const distance = Math.abs(rect.top - viewportAnchor);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = id;
    }
  });

  registeredLabels.forEach(({ setActive }, id) => {
    setActive(id === closestId);
  });
}

function scheduleActiveLabelUpdate() {
  if (animationFrameId !== null) return;

  animationFrameId = window.requestAnimationFrame(updateActiveLabel);
}

function attachListeners() {
  if (listenersAttached) return;

  window.addEventListener("scroll", scheduleActiveLabelUpdate, {
    passive: true,
  });

  window.addEventListener("resize", scheduleActiveLabelUpdate);

  listenersAttached = true;
}

function detachListenersIfNeeded() {
  if (registeredLabels.size > 0 || !listenersAttached) return;

  window.removeEventListener("scroll", scheduleActiveLabelUpdate);
  window.removeEventListener("resize", scheduleActiveLabelUpdate);

  listenersAttached = false;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const labelIdRef = useRef<symbol>(Symbol("section-label"));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!labelRef.current) return;

    const labelId = labelIdRef.current;

    registeredLabels.set(labelId, {
      element: labelRef.current,
      setActive: setIsActive,
    });

    attachListeners();
    scheduleActiveLabelUpdate();

    return () => {
      registeredLabels.delete(labelId);
      detachListenersIfNeeded();
      scheduleActiveLabelUpdate();
    };
  }, []);

  return (
    <div
      ref={labelRef}
      className="group inline-flex items-center gap-3 text-sm font-semibold text-neutral-500"
    >
      <span
        className={`h-px bg-neutral-950 transition-all duration-500 ${
          isActive ? "w-12" : "w-6 group-hover:w-12"
        }`}
      />

      <span className="tracking-wide">{children}</span>
    </div>
  );
}