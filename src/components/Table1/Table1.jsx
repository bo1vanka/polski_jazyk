import React from 'react';
import styles from './Table1.module.scss';

const Table1 = () => {
  return (
    <div className={styles.tableContainer}>
       <h2>1. Polish Letters with Sounds Fully Equivalent to English Sounds</h2>
      <table>
        <thead>
          <tr>
            <th>Polish Letter</th>
            <th>English Sound</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>A as in "father"</td>
          </tr>
          <tr>
            <td>B</td>
            <td>B as in "bat"</td>
          </tr>
          <tr>
            <td>C</td>
            <td>TS as in "cats"</td>
          </tr>
          <tr>
            <td>D</td>
            <td>D as in "dog"</td>
          </tr>
          <tr>
            <td>E</td>
            <td>E as in "bed"</td>
          </tr>
          <tr>
            <td>F</td>
            <td>F as in "fish"</td>
          </tr>
          <tr>
            <td>G</td>
            <td>G as in "go"</td>
          </tr>
          <tr>
            <td>I</td>
            <td>I as in "machine"</td>
          </tr>
          <tr>
            <td>K</td>
            <td>K as in "kite"</td>
          </tr>
          <tr>
            <td>L</td>
            <td>L as in "lip"</td>
          </tr>
          <tr>
            <td>M</td>
            <td>M as in "man"</td>
          </tr>
          <tr>
            <td>N</td>
            <td>N as in "net"</td>
          </tr>
          <tr>
            <td>O</td>
            <td>O as in "pot"</td>
          </tr>
          <tr>
            <td>P</td>
            <td>P as in "pen"</td>
          </tr>
          <tr>
            <td>R</td>
            <td>R as in "roll"</td>
          </tr>
          <tr>
            <td>S</td>
            <td>S as in "sun"</td>
          </tr>
          <tr>
            <td>T</td>
            <td>T as in "top"</td>
          </tr>
          <tr>
            <td>U</td>
            <td>U as in "boot"</td>
          </tr>
          <tr>
            <td>W</td>
            <td>V as in "vase"</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>I as in "sit"</td>
          </tr>
          <tr>
            <td>Z</td>
            <td>Z as in "zebra"</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Table1;
