import NextLink from 'next/link';
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { getAllBlogPosts } from '@/lib/api';

export default async function StaticBlogList() {
  // ビルド時にデータを取得
  const posts = await getAllBlogPosts();

  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        ブログ記事リスト（静的生成）
      </Heading>
      <UnorderedList styleType="none" spacing={2} ml={0}>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            p={3}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <VStack align="start" spacing={1}>
              <Link
                as={NextLink}
                href={`/blog/${post.id}`}
                color="blue.500"
                fontWeight="medium"
                _hover={{ textDecoration: 'underline' }}
              >
                {post.title}
              </Link>
              <Text fontSize="sm" color="gray.600">
                投稿日: {post.date}
              </Text>
            </VStack>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
