import { motion } from 'framer-motion';

interface ConnectionStatusProps {
  isConnected: boolean;
  error: string | null;
}

export function ConnectionStatus({ isConnected, error }: ConnectionStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: isConnected ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
        className={`w-3 h-3 rounded-full ${
          isConnected ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <div className="flex flex-col">
        <span className="text-sm text-gray-600">
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-red-500"
          >
            {error}
          </motion.span>
        )}
      </div>
    </div>
  );
}