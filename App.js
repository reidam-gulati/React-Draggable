import Draggable from "react-draggable"
export default function App(){
    return(
        <div>
            <Draggable>
                <div>
           <h1>Reidam</h1> 
           <p>hey! Reidam this side.</p>
           <table>
            <tr>
                <th>Name</th>
                <th>Age</th>

            </tr>
            <tr>
                <td>Reidam</td>
                <td>21</td>
            </tr>
           </table>
           </div>
           </Draggable>
       
        </div>
    )
}