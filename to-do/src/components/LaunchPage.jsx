import React, { useEffect } from 'react'
import './launchpage.css'

export default function LaunchPage({ onContinue }) {

  return (
    <div className="launch-page" role="dialog" aria-modal="true">
      <div className="launch-card">
        <h1>Welcome to your To‑Do App</h1>
        <p>Organize your day — add, complete, and remove tasks with ease.</p>
        <div>
          <button onClick={onContinue} className="enter-btn">Click To Start Adding</button>
        </div>
       
      </div>
    </div>
  )
}
