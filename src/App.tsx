import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import characterImg from './assets/character.jpg'
import './App.css'

function App() {
  useEffect(() => {
    // 페이지가 열릴 때 폭죽(컨페티) 효과 실행
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <div className="bg-blue-700 text-white min-h-screen flex flex-col items-center justify-center p-4">
      {/* 1. 캐릭터 위쪽에 크게 들어가는 문구 */}
      <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-md animate-bounce">
        もっと褒めろ
      </h1>

      {/* 2. 저장하신 character.jpg 캐릭터 이미지 */}
      <img
        src={characterImg}
        alt="귀여운 캐릭터"
        className="w-72 h-72 object-contain drop-shadow-xl rounded-2xl"
      />
    </div>
  )
}

export default App