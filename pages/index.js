import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vitthal Soni
          </Heading>
          <p>Game Developer ( Gamer / Developer / Weeb )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/anime.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>
          Hey I m a freelance and full passionate developer and really
          interested in learning new things. Currently I m learning java and
          working on minecraft mods/client.
        </p>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <p>
          Hi My name is Vitthal. I m 13 years old and I am a self-taught
          programmer. I love to develope awesome stuff like games and websites.
          I am currently working on Minecraft Clients/Mods and learning Java
          with it.I started programming when I was 12 to make discord bots in js
          and I have created few discord bots. In my free time I like to watch
          anime and freelance for people.
        </p>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <p>Drawing, Programming, Gaming, Learning, Reading.</p>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact Me!
        </Heading>
        <p>Want to contact me? you can contact me by mailing me - vitthalsoni6298@gmail.com. You can tell if you liked or not the website or I can do some improvements in this website or you can mail me for some work. :D</p>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Anime
        </Heading>
        <p>Here&apos;s an list of anime I watch.</p>
        <Image
          src="images/chainsawman.png"
          w={150}
          float="left"
          padding={1}
          alt="Chainsaw Man Anime"
        />
        <Image
          src="images/one-piece.png"
          w={157}
          float="left"
          padding={1}
          alt="One Piece Anime"
        />
        <Image
          src="images/demonslayer.jpg"
          w={150}
          float="left"
          padding={1}
          alt="Demon Slayer Anime"
        />
      </Section>
    </Container>
  )
}

export default Page
