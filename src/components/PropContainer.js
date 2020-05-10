import React from 'react'
import { connect } from 'react-redux'

function PropContainer(props) {
    return (
        <div>
            <h2>Prop -  {props.item}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.customProp
    }
}


// 2nd parameter for prop access
// const mapDispatchToProps = (dispatch, ownProps) => {
//     ...
// }

export default connect(mapStateToProps)(PropContainer)