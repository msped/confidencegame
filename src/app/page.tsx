import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  GridItem,
  List,
  Separator,
} from '@chakra-ui/react';
import Link from 'next/link';
import IconRenderer from '@/app/components/iconRenderer'; // Import the Client Component

export default function HomePage() {
  const bgColor = 'gray.50';
  const textColor = 'gray.700';
  const headingColor = 'gray.900';
  const iconColor = 'teal.500';

  return (
    <Box bg={bgColor} py={20} px={[4, 8, 16]}>
      <Container maxW="container.xl">
        {/* Hero Section */}
        <VStack gap={8} textAlign="center" mb={20}>
          <Heading as="h1" size="3xl" color={headingColor}>
            Unlock Your Inner Confidence
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Confidence Game is your personal AI-powered confidence coach. Practice, learn, and grow in a safe and supportive environment.
          </Text>
          <Link href="/chat">
            <Button colorScheme="teal" size="lg">
              Get Started Today
            </Button>
          </Link>
        </VStack>

        {/* How It Works Section */}
        <VStack gap={8} mb={20}>
          <Heading as="h2" size="2xl" color={headingColor}>
            How It Works
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} gap={10}>
            <GridItem>
              <VStack gap={4} align="center">
                <IconRenderer iconName="FaComments" boxSize={12} color={iconColor} />
                <Heading as="h3" size="md" color={headingColor}>
                  Engage in Conversations
                </Heading>
                <Text color={textColor}>
                  {"Practice real-life scenarios with our AI. From job interviews to social gatherings, we've got you covered."}
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={4} align="center">
                <IconRenderer iconName="FaChartLine" boxSize={12} color={iconColor} />
                <Heading as="h3" size="md" color={headingColor}>
                  Track Your Progress
                </Heading>
                <Text color={textColor}>
                  {"Monitor your growth with detailed analytics. See how far you've come and identify areas for improvement."}
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={4} align="center">
                <IconRenderer iconName="FaTrophy" boxSize={12} color={iconColor} />
                <Heading as="h3" size="md" color={headingColor}>
                  Earn Achievements
                </Heading>
                <Text color={textColor}>
                  Stay motivated by unlocking achievements and earning rewards as you progress on your confidence journey.
                </Text>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </VStack>

        <Separator mb={20} />

        {/* Who We Help Section */}
        <VStack gap={8} mb={20}>
          <Heading as="h2" size="2xl" color={headingColor}>
            Who We Help
          </Heading>
          <SimpleGrid columns={[1, 2]} gap={10}>
            <GridItem>
              <VStack gap={4} align="start">
                <HStack>
                  <IconRenderer iconName="FaUser" boxSize={6} color={iconColor} />
                  <Text fontWeight="bold" color={headingColor}>Professionals</Text>
                </HStack>
                <Text color={textColor}>
                  Ace your next job interview, deliver compelling presentations, and build stronger professional relationships.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={4} align="start">
                <HStack>
                  <IconRenderer iconName="FaUser" boxSize={6} color={iconColor} />
                  <Text fontWeight="bold" color={headingColor}>Students</Text>
                </HStack>
                <Text color={textColor}>
                  Gain confidence in class discussions, group projects, and social interactions.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={4} align="start">
                <HStack>
                  <IconRenderer iconName="FaUser" boxSize={6} color={iconColor} />
                  <Text fontWeight="bold" color={headingColor}>Socially Anxious Individuals</Text>
                </HStack>
                <Text color={textColor}>
                  Practice social interactions in a safe space and gradually build your confidence in real-world situations.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={4} align="start">
                <HStack>
                  <IconRenderer iconName="FaUser" boxSize={6} color={iconColor} />
                  <Text fontWeight="bold" color={headingColor}>Anyone Seeking Personal Growth</Text>
                </HStack>
                <Text color={textColor}>
                  {"Whether you're looking to improve your communication skills or simply feel more self-assured, Confidence Game is here to support you."}
                </Text>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </VStack>

        <Separator mb={20} />

        {/* Key Features Section */}
        <VStack gap={8} mb={20}>
          <Heading as="h2" size="2xl" color={headingColor}>
            Key Features
          </Heading>
          <List.Root gap={4}>
            <List.Item>
              <List.Indicator>
                <IconRenderer iconName="FaCheckCircle" color={iconColor} />
              </List.Indicator>
              <Text color={textColor}>Realistic AI Conversations: Engage in lifelike dialogues.</Text>
            </List.Item>
            <List.Item>
              <List.Indicator>
                <IconRenderer iconName="FaCheckCircle" color={iconColor} />
              </List.Indicator>
              <Text color={textColor}>Personalized Feedback: Receive tailored insights to improve.</Text>
            </List.Item>
            <List.Item>
              <List.Indicator>
                <IconRenderer iconName="FaCheckCircle" color={iconColor} />
              </List.Indicator>
              <Text color={textColor}>Progress Tracking: Monitor your growth over time.</Text>
            </List.Item>
            <List.Item>
              <List.Indicator>
                <IconRenderer iconName="FaCheckCircle" color={iconColor} />
              </List.Indicator>
              <Text color={textColor}>Achievements & Rewards: Stay motivated with milestones.</Text>
            </List.Item>
            <List.Item>
              <List.Indicator>
                <IconRenderer iconName="FaCheckCircle" color={iconColor} />
              </List.Indicator>
              <Text color={textColor}>Safe & Supportive Environment: Practice without judgment.</Text>
            </List.Item>
          </List.Root>
        </VStack>

        {/* Call to Action */}
        <VStack gap={8} textAlign="center">
          <Heading as="h2" size="2xl" color={headingColor}>
            Ready to Take the First Step?
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Join Confidence Game today and start building the confident you!
          </Text>
          <Link href="/chat">
            <Button colorScheme="teal" size="lg">
              Start Now
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}
