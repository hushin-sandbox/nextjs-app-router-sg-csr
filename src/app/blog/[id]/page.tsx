import Link from 'next/link';
import styles from './page.module.css';
import { getBlogIds, getBlogPostById } from '@/lib/api';

// 静的生成のためのパスを定義
export async function generateStaticParams() {
  const ids = await getBlogIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getBlogPostById(parseInt(id));

  if (!post) {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← ホームに戻る
        </Link>
        <div className={styles.notFound}>記事が見つかりませんでした</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← ホームに戻る
      </Link>

      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.date}>投稿日: {post.date}</div>
        <div className={styles.content}>{post.content}</div>
      </article>
    </div>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
