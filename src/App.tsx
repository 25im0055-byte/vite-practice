import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import characterImg from './assets/character.jpg'
import './App.css'

function App() {
  useEffect(() => {
    // 1. 처음에 빰! 하고 한번 크게 터지는 컨페티
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    })

    // 2. 화면 위에서 지속적으로 잔잔하게 계속 내리는 컨페티
    const duration = 15 * 1000 // 15초 동안 계속 내림
    const animationEnd = Date.now() + duration

    // NodeJS.Timeout 대신 window.setInterval / number 타입으로 수정
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#ffbb00']
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#ffbb00']
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-4">
      {/* 1. 캐릭터 위쪽에 크게 들어가는 문구 */}
      <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-sm animate-bounce text-slate-900">
        もっと褒めろ
      </h1>

      {/* 2. 저장하신 character.jpg 캐릭터 이미지 */}
      <img
        src={characterImg}
        alt="귀여운 캐릭터"
        className="w-72 h-72 object-contain drop-shadow-md rounded-2xl"
      />
    </div>
  )
}

export default App