export type BlogPost = {
  id: number;
  title: string;
  date: string;
  content?: string;
};

type DashboardData = {
  title: string;
  lastUpdated: string;
};

// ブログ記事の一覧を取得
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // 実際のプロジェクトではここでAPIリクエストを行う
  return [
    { id: 1, title: '静的生成についての記事', date: '2025-04-01' },
    { id: 2, title: 'Next.js 15の新機能', date: '2025-04-02' },
    { id: 3, title: 'SGとCSRの組み合わせ方', date: '2025-04-03' },
  ];
}

// 特定のブログ記事を取得
export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  const posts: Record<number, BlogPost> = {
    1: {
      id: 1,
      title: '静的生成についての記事',
      date: '2025-04-01',
      content:
        'Next.js 15での静的生成は非常に強力になりました。ここではその詳細を説明します...',
    },
    2: {
      id: 2,
      title: 'Next.js 15の新機能',
      date: '2025-04-02',
      content:
        'Next.js 15では多くの新機能が追加されました。特に注目すべきは...',
    },
    3: {
      id: 3,
      title: 'SGとCSRの組み合わせ方',
      date: '2025-04-03',
      content:
        'SGとCSRを適切に組み合わせることで、パフォーマンスと動的な機能の両方を最適化できます...',
    },
  };

  return posts[id] || null;
}

// ブログ記事のIDリストを取得
export async function getBlogIds(): Promise<number[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => post.id);
}

// ダッシュボードデータを取得
export async function getStaticDashboardData(): Promise<DashboardData> {
  return {
    title: 'ダッシュボード',
    lastUpdated: new Date().toISOString(),
  };
}
