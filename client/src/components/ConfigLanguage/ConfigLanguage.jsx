import React from 'react'

function PSLanguage() {
  return (
    <div>
      <h2>My preferred language is</h2>
      <label htmlFor="languages">My preferred language is</label>

      <select name="languages" id="languages">
        <option value="english">My preferred language is</option>
        <option value="spanish">mi idioma preferido es</option>
        <option value="chinese">我首选的语言是</option>
        <option value="french">ma langue préférée est</option>
        <option value="hindi">मेरी पसंदीदा भाषा है</option>
      </select>
    </div>
  )
}

export default PSLanguage