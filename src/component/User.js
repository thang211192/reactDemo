import React, { Component } from 'react';
const uid = require('uuid/v1')

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        
    }
    checkStatus = () => {
        var item = {}; 
        item.id = uid();
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission
        if(this.props.visibleForm === true)
            return (
                <div className="col"> 
                <form>
                    <div className="card text-white bg-danger mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Create</div>
                    <div className="card-body">
                        <div className="form-group">
                            <input name = "name" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="User name" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} name= "tel" type="text" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChange(event)} className="custom-select" name="permission" required>
                                <option>choose..</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type = "reset" className="btn btn-primary" onClick={()=> this.props.add(item)} value="Thêm mới"/>
                        </div>
                    </div>
                </div>
                </form>
                </div>
                
            )
    }
    render() {
        return (
            <div>
               {this.checkStatus()}
               </div>

        );
    }
}

export default User;