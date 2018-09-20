const NewImage = (props) => {
    let formFields = {}

    return(
        <form onSubmit={ (e) => { props.handleFormSubmit(formFields.url.value); e.target.reset();}
        }>
            <input ref={input => formFields.url = input} placeholder='Enter the name of the item'/>
            <button>Submit</button>
        </form>
    )
}