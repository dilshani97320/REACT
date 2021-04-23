import react from 'react';
import NameListItem from './NameListItem';
function NameList()
{

const NameList={

Name:{
    "title": "mr",
    "first": "brad",
    "last": "gibson"
  },location: {
    
    "city": "kilcoole",

    },email: "brad.gibson@example.com",
    dob: {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },picture: {
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
};

    return (
       <react.Fragment>
        <h1>Name List</h1>
        <hr></hr>
        <ul>
        <NameListItem 
        name="Dilshani" 
        city="Matara"
        email="dilshanithathsrar@gmail.com"
        birthday=""
        image="https://randomuser.me/api/portraits/med/men/75.jpg"/>
       
        </ul>
       </react.Fragment>
    
    )
}
export default NameList;
