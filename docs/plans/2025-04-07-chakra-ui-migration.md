# Chakra UI への移行計画

## 概要

CSS Modules から Chakra UI v2 への移行を行い、スタイリングシステムを統一します。

## 現状分析

### 既存の CSS モジュールファイル

1. src/app/page.module.css
2. src/app/blog/[id]/page.module.css
3. src/app/dashboard/page.module.css
4. src/components/ClientCounter.module.css
5. src/components/StaticBlogList.module.css

### 現在のスタイリング特徴

- max-width: 64rem のコンテナレイアウト
- シンプルなカラースキーム（青系のリンク色、グレースケールのテキスト色）
- Flexbox ベースのレイアウト
- レスポンシブデザインはシンプル

## 移行計画

### 1. 依存関係の追加

```bash
pnpm add @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
```

### 2. Chakra UI のセットアップ

1. src/app/providers.tsx の作成

   - ChakraProvider の設定
   - App Router 対応のセットアップ

2. src/app/layout.tsx の更新
   - providers の統合
   - globals.css の必要な部分の移行

### 3. コンポーネントの移行

#### 3.1 共通レイアウトコンポーネントの作成

- src/components/layouts/Container.tsx の作成
  - 現在の max-width: 64rem パターンを統一管理

#### 3.2 各ページ/コンポーネントの移行

1. ClientCounter

   - ボタンを`Button`コンポーネントに置き換え
   - レイアウトを`Stack`、`HStack`に移行
   - カウンター表示を`Text`コンポーネントに移行

2. StaticBlogList

   - リストを`VStack`と`Box`に移行
   - リンクを`Link`コンポーネントに移行
   - 日付表示を`Text`コンポーネントに移行

3. メインページ（page.tsx）

   - セクションを`Box`または`Card`に移行
   - タイトルを`Heading`に移行
   - 説明文を`Text`に移行

4. ブログ詳細ページ

   - 記事コンテナを`Box`に移行
   - タイトルを`Heading`に移行
   - バックリンクを`Link`に移行

5. ダッシュボードページ
   - インタラクティブセクションを`Box`に移行
   - リストを`UnorderedList`と`ListItem`に移行
   - 情報ボックスを`Box`に移行

### 4. CSS モジュールの削除

移行完了後、以下のファイルを削除：

- src/app/page.module.css
- src/app/blog/[id]/page.module.css
- src/app/dashboard/page.module.css
- src/components/ClientCounter.module.css
- src/components/StaticBlogList.module.css

### 5. クリーンアップとテスト

1. 不要な CSS のインポート文の削除
2. 各ページのレイアウト確認
3. インタラクティブ機能のテスト
4. レスポンシブデザインの確認

## 影響範囲

### 変更が必要なファイル

1. src/app/layout.tsx
2. src/app/page.tsx
3. src/app/blog/[id]/page.tsx
4. src/app/dashboard/page.tsx
5. src/components/ClientCounter.tsx
6. src/components/StaticBlogList.tsx

### 新規作成するファイル

1. src/app/providers.tsx
2. src/components/layouts/Container.tsx

## リスクと対策

1. Next.js App Router との互換性

   - @chakra-ui/next-js パッケージを使用して対応
   - プロバイダーの設定を慎重に行う

2. パフォーマンスへの影響

   - 必要なコンポーネントのみをインポート
   - 適切なメモ化の実装

3. アクセシビリティ
   - Chakra UI のデフォルトのアクセシビリティ機能を活用
   - 必要に応じて aria 属性を追加

## スケジュール

1. セットアップ（30 分）
2. 共通レイアウトコンポーネントの作成（30 分）
3. 各コンポーネントの移行（2-3 時間）
4. テストと調整（1 時間）

## 成功基準

1. すべての CSS モジュールが削除されている
2. 既存の機能が正常に動作する
3. レスポンシブデザインが維持されている
4. パフォーマンスが著しく低下していない
