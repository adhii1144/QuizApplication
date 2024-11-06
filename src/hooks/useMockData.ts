import { useState, useEffect } from 'react';

interface MockDataOptions {
  interval?: number;
  enabled: boolean;
  onData: (data: any) => void;
}

export function useMockData({ interval = 2000, enabled, onData }: MockDataOptions) {
  useEffect(() => {
    if (!enabled) return;

    const timer = setInterval(() => {
      const mockData = {
        id: crypto.randomUUID(),
        value: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      onData(mockData);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, enabled, onData]);
}