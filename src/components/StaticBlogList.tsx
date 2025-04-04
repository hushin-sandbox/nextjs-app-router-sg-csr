import Link from 'next/link';
import styles from './StaticBlogList.module.css';
import { getAllBlogPosts } from '@/lib/api';

export default async function StaticBlogList() {
  // ビルド時にデータを取得
  const posts = await getAllBlogPosts();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ブログ記事リスト（静的生成）</h3>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.item}>
            <Link href={`/blog/${post.id}`} className={styles.link}>
              {post.title}
            </Link>
            <p className={styles.date}>投稿日: {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
