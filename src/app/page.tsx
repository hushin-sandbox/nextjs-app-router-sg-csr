import NextLink from 'next/link';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import StaticBlogList from '@/components/StaticBlogList';
import ClientCounter from '@/components/ClientCounter';
import { Container } from '@/components/layouts/Container';

export default function Home() {
  return (
    <Box as="main">
      <Container>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            Next.js 15 SG+CSR デモ
          </Heading>

          <Card>
            <CardBody>
              <Stack spacing={4}>
                <Heading as="h2" size="lg">
                  静的生成（SG）部分
                </Heading>
                <Text color="gray.600">
                  このコンテンツはビルド時に生成されます
                </Text>
                <StaticBlogList />
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Stack spacing={4}>
                <Heading as="h2" size="lg">
                  クライアントサイドレンダリング（CSR）部分
                </Heading>
                <Text color="gray.600">
                  このカウンターはクライアントサイドでレンダリングされます
                </Text>
                <ClientCounter />
              </Stack>
            </CardBody>
          </Card>

          <Link
            as={NextLink}
            href="/dashboard"
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
          >
            ダッシュボードへ移動（CSRを含む）
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

// このページは静的に生成される
export const dynamic = 'force-static';
