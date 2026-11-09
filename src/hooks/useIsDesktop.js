import { useSyncExternalStore } from 'react'

/* prd.md 브레이크포인트와 같은 값. CSS의 @media (min-width: 1024px)와 맞춰서 쓴다. */
const DESKTOP_QUERY = '(min-width: 1024px)'

const subscribe = (onChange) => {
  const media = window.matchMedia(DESKTOP_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

const isDesktopNow = () => window.matchMedia(DESKTOP_QUERY).matches

/* 화면 폭이 데스크톱이면 true. 창 크기가 바뀌면 자동으로 다시 그린다. */
function useIsDesktop() {
  return useSyncExternalStore(subscribe, isDesktopNow)
}

export default useIsDesktop
