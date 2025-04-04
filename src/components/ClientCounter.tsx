'use client';

import { useState, useEffect } from 'react';
import styles from './ClientCounter.module.css';

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
    <div className={styles.container}>
      <div className={styles.counterControls}>
        <button
          onClick={() => setCount(count - 1)}
          className={styles.button}
          aria-label="カウントを減らす"
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className={styles.button}
          aria-label="カウントを増やす"
        >
          +
        </button>
      </div>
      <div className={styles.timeDisplay}>
        現在時刻（クライアントサイド）:{' '}
        <span className={styles.monospace}>{currentTime}</span>
      </div>
    </div>
  );
}
