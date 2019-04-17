import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempVal: "",
            userObj:{}
        }
    }

    visibleBtn = () => {
        if (this.props.visibleForm === true) {
            return <div className="btn  btn-block btn-outline-secondary" onClick={() => this.props.connect()}>Remove</div>
        }
        else {
            return <div className="btn btn-block btn-info" onClick={() => this.props.connect()}>Add</div>
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }
    isChange = (event) => {
        this.setState({
            tempVal: event.target.value
        })
        this.props.getTextSearch(this.state.tempVal)
    }
    isShowEditFrom = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
                changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
                editUserObject = {this.props.editUserObject}
                getUserEditInfo = {(info)=>this.getUserEditInfo(info)}
            />
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditFrom()}
                </div>
                <div className="btn-group" style={{ width: '100%' }}>
                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Từ khóa" />
                    <div className="btn btn-primary" onClick={() => this.props.getTextSearch(this.state.tempVal)}>Tìm</div>
                </div>
                <div className="btn-group1 mt-2">
                    {this.visibleBtn()}
                </div>
            </div>
        );
    }
}

export default Search;