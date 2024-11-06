import { useState, useEffect, useCallback } from 'react';
import { Client } from '@stomp/stompjs';

interface WebSocketOptions {
  url: string;
  topic: string;
  onMessage: (data: any) => void;
}

export function useWebSocket({ url, topic, onMessage }: WebSocketOptions) {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(() => {
    try {
      const client = new Client({
        brokerURL: url,
        onConnect: () => {
          setIsConnected(true);
          setError(null);
          client.subscribe(topic, (message) => {
            try {
              const data = JSON.parse(message.body);
              onMessage(data);
            } catch (e) {
              console.error('Failed to parse message:', e);
            }
          });
        },
        onDisconnect: () => {
          setIsConnected(false);
        },
        onStompError: (frame) => {
          setError(`STOMP error: ${frame.headers.message}`);
          setIsConnected(false);
        },
        onWebSocketError: (event) => {
          setError('WebSocket connection failed');
          setIsConnected(false);
        }
      });

      client.activate();
      return client;
    } catch (e) {
      setError('Failed to initialize WebSocket');
      return null;
    }
  }, [url, topic, onMessage]);

  useEffect(() => {
    const client = connect();
    return () => {
      client?.deactivate();
    };
  }, [connect]);

  return { isConnected, error };
}