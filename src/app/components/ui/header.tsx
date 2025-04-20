import { Box, Flex, Spacer, Button, HStack } from '@chakra-ui/react';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Header() {

  return (
    <Box as="header" bg="teal.400" color="white" py={4} px={8}>
      <Flex align="center">
        <Link href="/">
          <Button variant="plain" color="white" fontSize="lg" fontWeight="bold">
            Confidence Game
          </Button>
        </Link>
        <Spacer />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <HStack gap={4}>
            <SignUpButton mode="modal">
              <Button colorScheme="teal" variant="solid" p={2}>
                Sign Up
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button colorScheme="teal" variant="ghost" p={2}>
                Sign In
              </Button>
            </SignInButton>
          </HStack>
        </SignedOut>
      </Flex>
    </Box>
  );
}