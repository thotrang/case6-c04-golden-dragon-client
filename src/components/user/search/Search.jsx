import { useState } from "react";

function Search({ users }) {
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(users);
    return (
        <div>
            <input
                name="search"
                onChange={e => { handleChange(e) }}
                style={{ borderStyle: "solid" }}
            ></input>
            <button>Click</button>
            <div>
                {
                users
                .filter((user)=>{
                    if(search == ""){
                        return ;
                    }
                    else if(user.name.toLowerCase().inCludes(search.toLowerCase())){
                        return user
                    }
                })
                .map((user) => (
                    <li>{user.name}</li>
                ))}
            </div>
        </div>
    )
}
export default Search;  