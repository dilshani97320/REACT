import react from 'react';
import NameListItem from './NameListItem';
function NameList()
{
    return (
       <react.Fragment>
        <h1>Name List</h1>
        <hr></hr>
        <ul>
        <NameListItem/>
        <NameListItem/>
        <NameListItem/>
        <NameListItem/>
        </ul>
       </react.Fragment>
    
    )
}
export default NameList;
