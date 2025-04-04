import Link from 'next/link';
import styles from './page.module.css';
import StaticBlogList from '@/components/StaticBlogList';
import ClientCounter from '@/components/ClientCounter';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js 15 SG+CSR デモ</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>静的生成（SG）部分</h2>
        <p className={styles.description}>
          このコンテンツはビルド時に生成されます
        </p>
        <StaticBlogList />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          クライアントサイドレンダリング（CSR）部分
        </h2>
        <p className={styles.description}>
          このカウンターはクライアントサイドでレンダリングされます
        </p>
        <ClientCounter />
      </section>

      <Link href="/dashboard" className={styles.link}>
        ダッシュボードへ移動（CSRを含む）
      </Link>
    </main>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
