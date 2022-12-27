import '../styles/globals.css'
import Navbar from './components/Navbar'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'




function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)

  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  }, [])
  return <> <LoadingBar
  color='#f11946'
  progress={progress}
  waitingTime = {400}
  onLoaderFinished={() => setProgress(0)}
/> <Navbar  /><Component {...pageProps} /></>
}

export default MyApp
