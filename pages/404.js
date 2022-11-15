import {
  Box,
  Button,
  Code,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" align="center" paddingTop={100} fontSize={100}>
        4 &lt;/&gt; 4
      </Heading>
      <Heading as="h2" paddingTop={180}>
        Not Found
      </Heading>
      <Code colorScheme='blue'>{'function Error404 {'}</Code>
      <br/>
      <pre>
        <Code colorScheme='blue'>{`   console.log('Error 404 has occurred')`}</Code>
      </pre>
      <Code colorScheme='blue'>{'}'}</Code>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
