import React from 'react'
import './table.css'
import textos from '../data/textos.json'
const jaysoun = textos.textotable[0]
function Inputs() {
    return(
    <>
 <table id="grid">
				<thead>
					<tr>
						<th>Nome:</th>
						<th>Email:</th>
						<th>Telefone:</th>
                        <th>Data de nascimento:</th>
					</tr>
					<tr>
						<td>{jaysoun.txt1}</td>
						<td>{jaysoun.txt2}</td>
						<td>{jaysoun.txt3}</td>
                        <td>{jaysoun.txt4}</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
    </>
    );
}
export default Inputs;