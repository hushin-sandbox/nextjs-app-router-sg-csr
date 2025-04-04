# Next.js 15 で SG と CSR を組み合わせたサンプルコード実装計画

## 概要

Next.js 15 で Static Generation (SG)と Client-Side Rendering (CSR)を組み合わせたサンプルを作成します。静的生成による高速なページロードと、クライアントサイドでのインタラクティブな機能を両立させます。

## ゴール

1. 静的生成（SG）とクライアントサイドレンダリング（CSR）の最適な組み合わせ方を示す
2. Next.js 15 の機能を活用した実装例の提供
3. CSS モジュールを使用した適切なスタイリング

## 実装計画

### 1. プロジェクト構造のセットアップ

```
src/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       ├── page.module.css
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.module.css  # 既存
│   └── page.tsx        # 既存
├── components/
│   ├── ClientCounter.module.css
│   ├── ClientCounter.tsx
│   ├── StaticBlogList.module.css
│   └── StaticBlogList.tsx
└── lib/
    └── api.ts
```

### 2. 実装ステップ

1. **基本セットアップ**

   - [ ] `components`と`lib`ディレクトリの作成
   - [ ] 必要なディレクトリ構造の作成

2. **コア機能の実装**

   - [ ] `lib/api.ts`の API 関数実装
     - ブログ投稿の取得
     - ダッシュボードデータの取得
   - [ ] TypeScript 型の定義

3. **コンポーネントの実装**

   - [ ] `ClientCounter.tsx`の実装
     - カウンター機能
     - 現在時刻の表示
     - CSS モジュールでのスタイリング
   - [ ] `StaticBlogList.tsx`の実装
     - ブログ記事リストの表示
     - CSS モジュールでのスタイリング

4. **ページの実装**

   - [ ] `app/page.tsx`の更新
     - 静的部分とクライアント部分の組み合わせ
   - [ ] `app/blog/[id]/page.tsx`の実装
     - 動的ルートパラメータの処理
     - 静的生成の設定
   - [ ] `app/dashboard/page.tsx`の実装
     - CSR コンポーネントの統合
     - 静的データの取得と表示

5. **スタイリング**
   - [ ] 各コンポーネント用の CSS モジュール作成
   - [ ] レスポンシブデザインの対応
   - [ ] アクセシビリティの考慮

### 3. 技術的なポイント

1. **静的生成（SG）**

   ```typescript
   // 静的生成の強制
   export const dynamic = 'force-static';

   // 動的ルートの静的パラメータ生成
   export async function generateStaticParams() {
     const ids = await getBlogIds();
     return ids.map((id) => ({ id: id.toString() }));
   }
   ```

2. **クライアントサイドレンダリング（CSR）**

   ```typescript
   'use client'; // クライアントコンポーネントの明示

   // クライアントサイドのステート管理
   const [count, setCount] = useState(0);
   ```

3. **データフェッチ**
   ```typescript
   // 静的データフェッチ
   async function getBlogPosts() {
     return [
       /* 静的データ */
     ];
   }
   ```

### 4. エラーハンドリング

1. ブログ記事が存在しない場合の処理
2. データ取得失敗時のフォールバック UI
3. クライアントサイドでのエラー表示

## 改善ポイント（実装後）

1. パフォーマンスの測定と最適化
2. テストの追加
3. アクセシビリティの改善
4. SEO 対策の強化

## 依存関係

- `next`: "15.0.0"
- `react`: "^19"
- `react-dom`: "^19"
- TypeScript 関連パッケージ
