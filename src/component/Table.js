import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {
    deleteButtonClick = (id) => {
       this.props.deleteUser(id);
        
    }
    mappingDataUser = () => this.props.dataUser.map((valuez,key) =>(
        <TableDataRow 
            editFunClick={(user)=>this.props.editFun(valuez)} 
            data={valuez} 
            key ={key} 
            xxx = {key}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
            deleteButtonClick = {(id)=>this.deleteButtonClick(id)}
        >
        </TableDataRow>
    ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Roles</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;