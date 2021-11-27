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
		
		function clickMe() {
			alert(" ");
		}

			return (
                <tr>
					<td>
						<img src={shoes.image} alt="SHOE" width="150" height="150"/>
					</td>
					<td>{shoes.name}</td>
					<td>{shoes.description}</td>
                    <td>Type: {shoes.type}</td>
					<td>{shoes.brand}</td>
					<td>${shoes.price}</td>
					<td>
						<button type="button" className="selectbut" onClick={clickMe}>
							Select
						</button>
					</td>
                </tr>
            )
        })

        return (
			<div className="application">
                    

					<br></br>
					<a href="http://localhost:3000/">
						<h2>Galaxy Shoe Catalog</h2>
					</a>
					<br></br>
					<thread>
						
							<th scope="col"><h5>Select from the best deals on top selling shoes</h5></th>
							<th scope="col">
								<a href="/cart.js">
									<button className="selectbut">Cart</button>
								</a>
							</th>
						
					</thread>
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