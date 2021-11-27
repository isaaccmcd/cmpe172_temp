import React, { Component } from 'react';

//make API calls to backend
import axios from 'axios';

//CSS Framework for developing responsive websites
import { Table } from "react-bootstrap";
class display extends Component {
   constructor(props) {
        super(props);
        this.state = {
            result: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/shoes')
            .then((response) => {
                //update the state with the response data
                this.setState({
                    result: response.data._embedded.shoes
                });
            })
            .catch(err => {
                this.setState({
                    error: <div className="alert alert-warning" style={{ marginTop: '5%' }}>Error</div>
                })
            });
    }
    render() {
        let error = this.state.error;

        let details = this.state.result.map(shoes => {			
		
			return (
                <tr>
					<td>
					</td>
					<td></td>
					<td></td>
                    <td></td>
					<td></td>
					<td></td>
					<td>
					</td>
                </tr>
            )
        })

        return (
			<div className="application">
                    

					<br></br>
					<a href="http://localhost:3000/">
						<h2>Your Cart</h2>
					</a>
					<br></br>
					
					
					
					<div className="table">
                        <Table>
                            <thead class="thead-dark">
                                <tr>
									{/*<th scope="col"></th>
                                    <th scope="col">Name</th>
									<th scope="col">Description</th>
                                    <th scope="col">Type</th>
									<th scope="col">Brand</th>
									<th scope="col">Price</th>
									<th scope="col"></th>*/}
                                </tr>
                            </thead>
                            <tbody>
                                {/*Display the Tbale row based on data recieved*/}
                                {details}
                            </tbody>
                        </Table>
						
                        {error}
                    </div>
            </div>
        )
    }
}


export default display;