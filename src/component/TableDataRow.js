import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionName = (permisson) =>{
        if(permisson === 1)
            return "Admin";
        else if(permisson === 2)
            return "Mor";
        else return "Normal"
    }
    editClick = () => {
        this.props.editFunClick()
        this.props.changeEditUserStatus()
    }
    deleteButtonClick = (id) => {
        this.props.deleteButtonClick(id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.xxx + 1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{this.permissionName(this.props.data.permission)}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={()=> this.editClick()}><i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(id)=>this.deleteButtonClick(this.props.data.id)}><i className="fa fa-trash-alt" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;