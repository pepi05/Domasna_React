import PropTypes from 'prop-types'
const Student = (props) => {
    return (
        <div>
            <h3>Student informations</h3>
            <p>First name : {props.firstName}</p>
            <p>Last name : {props.lastName}</p>
            <p>Index number : {props.index}</p>
            <p>City : {props.city}</p>
            <p>age : {props.age}</p>
            <p>Active status : {props.isActive}</p>
        </div>
    )
}

Student.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default Student;