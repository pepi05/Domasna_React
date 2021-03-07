const Input = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} error={props.error}></input>
            {props.error !== '' && <h3>{props.error}</h3>}
        </div>
    )
}

export default Input;