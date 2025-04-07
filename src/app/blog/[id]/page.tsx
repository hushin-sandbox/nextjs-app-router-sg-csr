import NextLink from 'next/link';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { getBlogIds, getBlogPostById } from '@/lib/api';
import { Container } from '@/components/layouts/Container';

// 静的生成のためのパスを定義
export async function generateStaticParams() {
  const ids = await getBlogIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPost({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostById(parseInt(id));

  if (!post) {
    return (
      <Container>
        <Stack spacing={4}>
          <Link
            as={NextLink}
            href="/"
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
          >
            ← ホームに戻る
          </Link>
          <Text textAlign="center" color="gray.600" py={8}>
            記事が見つかりませんでした
          </Text>
        </Stack>
      </Container>
    );
  }

  return (
    <Container>
      <Stack spacing={8}>
        <Link
          as={NextLink}
          href="/"
          color="blue.500"
          _hover={{ textDecoration: 'underline' }}
        >
          ← ホームに戻る
        </Link>

        <Box as="article">
          <Stack spacing={4}>
            <Heading as="h1" size="2xl">
              {post.title}
            </Heading>
            <Text color="gray.600">投稿日: {post.date}</Text>
            <Text lineHeight="tall" mt={8}>
              {post.content}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
