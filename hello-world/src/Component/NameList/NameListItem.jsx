import react from 'react';
function NameListItem(value)
{
    return(
<react.Fragment>
<li><img src={value.image}>/</img></li>
<li>{value.name}</li>
<li>city:{value.city}</li>
<li>email:{value.email}</li>
<li>Birthday:{value.birthday}</li>

</react.Fragment>

    )
}
export default NameListItem;