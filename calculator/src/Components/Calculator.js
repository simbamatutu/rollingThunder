import React, { Component } from 'react'

export class Calculator extends Component {
    render() {
        return (
            <div className='calculatorContainer'>
                <table>
                    <tr>
                        <th><h3>Calculator</h3></th>
                    </tr>
                    <tr id='display'>
                        
                          <tr>  <h4>2 + 2</h4> </tr>
                          <tr>  <h3>= 4</h3> </tr>
                        
                    </tr>
                    <tr className='outer'>
                        <td><input type="button" id='percentge' value='%'/></td>
                        <td><input type="button" id='clear' value='CE'/></td>
                        <td><input type="button" id='backspace' value='<='/></td>
                        <td><input type="button" id='divide' value='/'/></td>
                    </tr>

                    <tr className='topRow'>
                        <td><input type="button" id='seven' value='7'/></td>
                        <td><input type="button" id='eight' value='8'/></td>
                        <td><input type="button" id='nine' value='9'/></td>
                        <td><input type="button" id='multiply' className='outer' value='X' /></td>
                    </tr>

                    <tr className='secondRow'>
                        <td><input type="button" id='four' value='4'/></td>
                        <td><input type="button" id='five' value='5'/></td>
                        <td><input type="button" id='six' value='6'/></td>
                        <td><input type="button" id='subtract' className='outer' value='-'/></td>
                    </tr>

                    <tr className='thirdRow'>
                        <td><input type="button" id='one' value='1'/></td>
                        <td><input type="button" id='two' value='2'/></td>
                        <td><input type="button" id='three' value='3'/></td>
                        <td><input type="button" id='plus' className='outer' value='+'/></td>
                    </tr>

                    <tr className='lastRow'>
                        <td><input type="button" id='posNeg' value='+/-'/></td>
                        <td><input type="button" id='zero' value='0'/></td>
                        <td><input type="button" id='comma' value='.'/></td>
                        <td><input type="button" id='equal' className='outer' value='='/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Calculator
