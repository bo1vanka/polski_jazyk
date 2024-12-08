import React from 'react'
import s from './Table3.module.scss'
const Table3 = () => {
  return (
    <div className={s.tableContainer}> 
      <h2>3. Special Polish Letters and Shushing Sounds</h2>
      <table>
        <thead>
          <tr>
            <th>Polish Letter</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ć</td>
            <td>Soft "ch" sound, like "ch" in "church" but softer</td>
          </tr>
          <tr>
            <td>CZ</td>
            <td>Hard "ch" sound, like in "church"</td>
          </tr>
          <tr>
            <td>DZ</td>
            <td>"Dz" sound, like in "kids"</td>
          </tr>
          <tr>
            <td>DŻ</td>
            <td>"Dzh" sound, like in "judge"</td>
          </tr>
          <tr>
            <td>DŹ</td>
            <td>"Dzi" sound, soft and palatal, like "d" in "dye"</td>
          </tr>
          <tr>
            <td>Ń</td>
            <td>Soft "ny" sound, as in the "ny" in "canyon"</td>
          </tr>
          <tr>
            <td>SZ</td>
            <td>"Sh" sound, like in "shush"</td>
          </tr>
          <tr>
            <td>Ś</td>
            <td>Soft "sh" sound, like "sh" in "she"</td>
          </tr>
          <tr>
            <td>Ż</td>
            <td>"Zh" sound, like "s" in "measure"</td>
          </tr>
          <tr>
            <td>Ł</td>
            <td>"W" sound, but pronounced by rounding the lips</td>
          </tr>
          <tr>
            <td>CH</td>
            <td>"Kh" sound, like "ch" in "Bach" or "loch"</td>
          </tr>
          <tr>
            <td>SZCZ</td>
            <td>"Shch" sound, like the Russian "щ"</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table3
