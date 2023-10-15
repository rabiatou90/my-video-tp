import { Component } from "react";

class TestClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: "Michel"
        }
    }
    

    handleChange = (e)=> {
        console.log(e);
        this.setState({nom: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>{this.props.info}</h1>
                <h2>J'utilise ECMASCRIPT {this.props.calc}</h2>
                <p>
                    C'est moi {this.state.nom} 
                    <br />
                <input type="text" value={this.state.nom} onChange={this.handleChange}/>
                </p>
            </div>
        )
    }

}

export default TestClass