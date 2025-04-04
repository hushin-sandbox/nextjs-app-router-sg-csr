import Link from 'next/link';
import styles from './page.module.css';
import ClientCounter from '@/components/ClientCounter';
import { getStaticDashboardData } from '@/lib/api';

export default async function Dashboard() {
  const dashboardData = await getStaticDashboardData();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← ホームに戻る
      </Link>

      <h1 className={styles.title}>{dashboardData.title}</h1>

      <div className={styles.description}>
        <p>このページのコンテンツは以下の構成になっています：</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>ページ全体の構造は静的生成（SG）</li>
          <li className={styles.listItem}>
            下部のカウンターはクライアントサイドレンダリング（CSR）
          </li>
        </ul>
      </div>

      <div className={styles.infoBox}>
        <p className={styles.lastUpdated}>
          最終更新（ビルド時）:{' '}
          {new Date(dashboardData.lastUpdated).toLocaleString('ja-JP')}
        </p>
      </div>

      <div className={styles.interactiveSection}>
        <h2 className={styles.sectionTitle}>
          クライアントサイドのインタラクティブ要素
        </h2>
        <ClientCounter />
      </div>
    </div>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
