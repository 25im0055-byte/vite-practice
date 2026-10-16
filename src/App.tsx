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
    const duration = 15 * 1000 // 15초 동안 계속 내림 (원하면 시간 조절 가능)
    const animationEnd = Date.now() + duration

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      // 왼쪽과 오른쪽 위에서 번갈아가며 떨어진 컨페티 생성
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
    // bg-white: 하얀색 배경, text-gray-800: 보기 좋은 어두운 글자색
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