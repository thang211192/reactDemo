import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.editUserObject.id,
            name:this.props.editUserObject.name,
            tel:this.props.editUserObject.tel,
            permission:this.props.editUserObject.permission,
        }
    }
    
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus()
     }   
    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Update User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input defaultValue = {this.props.editUserObject.name} name="name" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="User name" />
                            </div>
                            <div className="form-group">
                                <input defaultValue = {this.props.editUserObject.tel} onChange={(event) => this.isChange(event)} name="tel" type="text" className="form-control" placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <select defaultValue={this.props.editUserObject.permission} onChange={(event) => this.isChange(event)} className="custom-select" name="permission" required>
                                    <option value>choose..</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group text-center">
                                <input 
                                type="reset" 
                                className="btn btn-danger" 
                                value="Save" 
                                onClick={()=>this.saveButton()}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;