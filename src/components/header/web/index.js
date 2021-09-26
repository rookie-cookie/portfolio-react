import React from 'react'
import './web.css'

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          {/* <i class="fi fi-rr-edit-alt option-icon"></i> */}
          projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          {/* <i class="fi fi-rr-laptop option-icon"></i> */}
          skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          {/* <i class="fi fi-rr-briefcase option-icon"></i> */}
          work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          {/* <i class="fi fi-rr-user option-icon"></i> */}
          contact
        </a>
      </div>
    </div>
  )
}

export default Web
