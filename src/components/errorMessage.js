import React from 'react'

const ErrorMessage = ({error = '',occurred}) => {
    let errorMessage = 'Something gone wrong! Try Again!'
    if(occurred){
        if(error !== '') {
            errorMessage = error
        }
        return(
            <React.Fragment>
                <p className={'text-danger'}>{errorMessage}</p>
            </React.Fragment>
        )
    }
    return null
}
export default ErrorMessage;