import { useState } from 'react'
import './App.css'

function App() {

  const languageList = ["PHP", "HTML", "JS", "React", "Vue", "Next"]

  const [selectedLang, setSelectedLang] = useState([])

  function handleDrop(e) {
    const lang = e.dataTransfer.getData("lang")
    console.log(lang)
    if (selectedLang.includes(lang)) return
    setSelectedLang([...selectedLang, lang])
  }

  function removeElem(lang) {
    setSelectedLang([...selectedLang].filter(item => item !== lang))
  }

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div style={{ height: "100%", width: "20%" }}>
        {languageList.map((lang, i) => (
          <div draggable key={i} onDragStart={(e) => e.dataTransfer.setData("lang", lang)} style={{ padding: "10px" }}>{lang}</div>
        ))}
      </div>
      <div style={{ height: "100%", width: "80%" }}>
        <div onDragOver={e => e.preventDefault()} onDrop={handleDrop} style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", gap: "10px" }}>
          {selectedLang.map((lang, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", padding: "10px", backgroundColor: "green", borderRadius: "5px" }}>{lang} <img style={{ cursor: "pointer" }} onClick={() => removeElem(lang)} width="10px" src='https://www.pngall.com/wp-content/uploads/17/X-Sign-Artistic-Depiction-PNG.png' /></div>
          ))}
        </div>
        <button onClick={() => setSelectedLang([])} style={{backgroundColor: "#7367f0", color: "white", padding: "10px", marginTop: "10px", border: "0px", borderRadius: "5px", cursor: "pointer"}}>Reset</button>
      </div>

    </div>
  )
}

export default App
