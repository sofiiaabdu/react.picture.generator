class Image extends React.Component{

    render(){
        return(
            <div>
                <img src={this.props.image.url}/>
                <br/>
                <button onClick={() => this.props.handleDelete(this.props.image.id)}>Delete</button>
            </div>
        )
    }
}