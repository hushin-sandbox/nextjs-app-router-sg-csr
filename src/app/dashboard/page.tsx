import NextLink from 'next/link';
import {
  Box,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import ClientCounter from '@/components/ClientCounter';
import { getStaticDashboardData } from '@/lib/api';
import { Container } from '@/components/layouts/Container';

export default async function Dashboard() {
  const dashboardData = await getStaticDashboardData();

  return (
    <Container>
      <Stack spacing={6}>
        <Link
          as={NextLink}
          href="/"
          color="blue.500"
          _hover={{ textDecoration: 'underline' }}
        >
          ← ホームに戻る
        </Link>

        <Heading as="h1" size="2xl">
          {dashboardData.title}
        </Heading>

        <Box>
          <Text mb={2}>このページのコンテンツは以下の構成になっています：</Text>
          <UnorderedList spacing={2}>
            <ListItem color="gray.700">
              ページ全体の構造は静的生成（SG）
            </ListItem>
            <ListItem color="gray.700">
              下部のカウンターはクライアントサイドレンダリング（CSR）
            </ListItem>
          </UnorderedList>
        </Box>

        <Box bg="gray.50" p={4} borderRadius="md">
          <Text fontSize="sm" color="gray.600">
            最終更新（ビルド時）:{' '}
            {new Date(dashboardData.lastUpdated).toLocaleString('ja-JP')}
          </Text>
        </Box>

        <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
          <Stack spacing={4}>
            <Heading as="h2" size="md">
              クライアントサイドのインタラクティブ要素
            </Heading>
            <ClientCounter />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
