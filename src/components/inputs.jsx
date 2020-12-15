import React from 'react'
import './inputs.css'

function test() {
    if( test = true){
    alert("Registrado com Sucesso");
  }
  else {
    alert ("error")
  }
  
  }

function Inputs() {
    return(
    <>
       <form action="/" method="post" id="form_prepare">
        <fieldset>
            <div>
                <label>Nome: <input type="text" name="nome" /></label>
            </div>
            <div>
				<label>Email: <input type="text" name="email" /></label>
            </div>
            <div>
				<label>Telefone: <input type="text" name="telefone" /></label>
            </div>
            <div>
				<label>D/D/N: <input type="text" name="datadenascimento" /></label>
            </div>
            <div>
				<label><input type="submit" name="ok" value="Ok" onClick={test} /></label>
            </div>
            <div>
            <text>
                Newsletter?
            </text>
                <input type="checkbox" name="ok" value="Ok" className="newws" onClick="insert()"/>
    
            </div>
            
    </fieldset>
</form>
    </>
    );
}
export default Inputs;