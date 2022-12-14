import { Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold,
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
  const VLogoLight = `/images/VDark.png`

  return (
    <>
      <Link href="/"></Link>
      <a>
        <LogoBox>
          <Image src={VLogoLight} width={30} height={30} alt="V" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Vitthal Soni
          </Text>
        </LogoBox>
      </a>
    </>
  )
}

export default Logo
