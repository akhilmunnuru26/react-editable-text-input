import {useState} from 'react'
import './index.css'

const Card = () => {
  const [saved, setSaved] = useState(false)
  const [text, setText] = useState('')

  const btnText = saved ? 'Edit' : 'Save'

  return (
    <div className="bg-container">
      <div className="card">
        <h1 className="title">Editable Text Input</h1>
        <div className="input-container">
          {!saved && (
            <input
              onChange={event => setText(event.target.value)}
              type="text"
              value={text}
              className="input"
            />
          )}
          {saved && <p className="text">{text}</p>}
          <button
            onClick={() => setSaved(prevState => !prevState)}
            className="save-btn"
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
