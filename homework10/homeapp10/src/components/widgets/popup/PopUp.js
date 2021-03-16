import '../popup/style.css'

const PopUp = (props) => {
    return(
        <div className='wrapper'>
            <div className='popup'>
            <span className='close' onClick={props.closePopup}>&times;</span>
                <div className='content'>
                    <p>Id: {props.user.id}</p>
                    <p>Username: {props.user.username}</p>
                    <p>Email: {props.user.email}</p>
                    <p>Phone: {props.user.phone}</p>
                    <p>website: {props.user.website}</p>
                </div>

            </div>

        </div>
    )
}

export default PopUp;