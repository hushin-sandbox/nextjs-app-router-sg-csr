'use client';

import { useState, useEffect } from 'react';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // クライアントサイドでのみ実行される
    setCurrentTime(new Date().toLocaleTimeString('ja-JP'));

    // 1秒ごとに時間を更新
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('ja-JP'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Stack spacing={4}>
      <HStack spacing={4}>
        <Button
          onClick={() => setCount(count - 1)}
          aria-label="カウントを減らす"
          size="md"
          variant="outline"
        >
          -
        </Button>
        <Text fontSize="xl" fontWeight="medium" minW="2rem" textAlign="center">
          {count}
        </Text>
        <Button
          onClick={() => setCount(count + 1)}
          aria-label="カウントを増やす"
          size="md"
          variant="outline"
        >
          +
        </Button>
      </HStack>
      <Text fontSize="sm" color="gray.600">
        現在時刻（クライアントサイド）:{' '}
        <Text as="span" fontFamily="mono">
          {currentTime}
        </Text>
      </Text>
    </Stack>
  );
}
