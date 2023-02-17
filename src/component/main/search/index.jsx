
import { useDispatch } from "react-redux";
import "./style.css"

const Search = ({onFilterHandler}) => {

    const submitForm = (e) => {
        onFilterHandler(e)
    }
    const dispatch = useDispatch()
    return (
        <div className="row">
            <p># products</p>
            {/* <form onSubmit={submitForm}> */}
                <input type="text" placeholder="search product"  onChange={(e) => submitForm(e.target.value)} />
            {/* </form> */}

        </div>
    )
}

export default Search;