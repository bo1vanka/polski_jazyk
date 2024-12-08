import React from 'react'
import s from './Table2.module.scss'
const Table2 = () => {
  return (
     
    <div className={s.tableContainer}> 
      <h2>2. Polish Letters with Sounds Not Present in English</h2>
      <table>
        <thead>
          <tr>
            <th>Polish Letter</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>H</td>
            <td>Guttural "KH" sound, similar to the "ch" in "Bach"</td>
          </tr>
          <tr>
            <td>Ł</td>
            <td>Pronounced like "W", with the lips, this sound does not exist in English</td>
          </tr>
          <tr>
            <td>Ó</td>
            <td>Similar to "U" but with a rounded mouth, like "oo" in "food"</td>
          </tr>
          <tr>
            <td>Ń</td>
            <td>Soft "ny" sound, like the "ny" in "canyon"</td>
          </tr>
          <tr>
            <td>Ś</td>
            <td>Soft "sh" sound, like "sh" in "she"</td>
          </tr>
          <tr>
            <td>Ć</td>
            <td>Soft "ch" sound, like "ch" in "church", but softer</td>
          </tr>
          <tr>
            <td>Ż</td>
            <td>"Zh" sound, like "s" in "measure"</td>
          </tr>
          <tr>
            <td>Ź</td>
            <td>Similar to the "zh" in "measure", but softer</td>
          </tr>
        </tbody>
      </table>
      </div>
    
  )
}

export default Table2
