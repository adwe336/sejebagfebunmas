"use client";

import { useEffect, useState } from "react";

export type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function format(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getCountdown(target: number): CountdownValue {
  const difference = Math.max(0, target - Date.now());

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    days: String(days),
    hours: format(hours),
    minutes: format(minutes),
    seconds: format(seconds),
  };
}

const initialCountdown: CountdownValue = {
  days: "000",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export function useCountdown(target: number): CountdownValue {
  const [countdown, setCountdown] =
    useState<CountdownValue>(initialCountdown);

  useEffect(() => {
    const update = () => {
      setCountdown(getCountdown(target));
    };

    update();

    const interval = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [target]);

  return countdown;
}