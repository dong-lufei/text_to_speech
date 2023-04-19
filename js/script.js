// 获取 HTML 句柄
const textarea = document.getElementsByClassName("textarea")[0],
  button = document.getElementsByClassName("speaking")[0]

// 是否处于语音中
let isSpeaking = true

// 文字转语音
const textToSpeech = () => {
  const synth = window.speechSynthesis
  const text = textarea.value

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text)
    synth.speak(utternace)
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerText = "暂停"
      synth.resume()
      isSpeaking = false
    } else {
      button.innerText = "继续"
      synth.pause()
      isSpeaking = true
    }
  } else {
    isSpeaking = false
    button.innerText = "语音中"
  }
  // debugger
  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true
      button.innerText = "转换为语音"
    }
  })
}

button.addEventListener("click", textToSpeech)
