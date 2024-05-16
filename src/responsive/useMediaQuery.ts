import { useMediaQuery } from '@chakra-ui/react'

export const useIsMobile = (): any => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return isMobile
}
