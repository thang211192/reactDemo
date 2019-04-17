import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import User from './User';
import DataUser from './Data.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      status:false,
      data: [],
      searchText:'',
      editUserStatus:false,
      editUserObject:{}
    };
    
  }
  
  componentWillMount() {
    //run before render
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  editUser = (user) => {
    this.setState({
      editUserObject:user
    })
    
  }
  editStatus = () => {
    this.setState({
      status: !this.state.status
    })
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    })
  }
  getTextSearch = (data)=>{
    this.setState({
      searchText:data
    });
  }
  getNewUserData = (item)=> {
    var items = this.state.data;
    items.push(item) 
    this.setState({
      data:items
    });
    //insert local storage
    localStorage.setItem('userData',JSON.stringify(items));
  }
  getUserEditInfoApp =  (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  deleteUser = (id) => {
    var tempData = this.state.data;
    tempData = tempData.filter(c => c.id !== id)
    this.setState({
      data:tempData
    })
    //insert local storage
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  deleteLocalStorage = () => {
    localStorage.removeItem('userData');
  }
  render() {
    var result = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item)
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
            <Search 
              getUserEditInfoApp = {(info)=>this.getUserEditInfoApp(info)}
              connect={() => this.editStatus()} 
              visibleForm={this.state.status}
              getTextSearch={(data)=>this.getTextSearch(data)}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus = {()=>this.changeEditUserStatus()}
              editUserObject = {this.state.editUserObject}
              >
            </Search>
            <div className="col-12">
                <hr/>
            </div>
            <Table 
              changeEditUserStatus = {()=>this.changeEditUserStatus()}
              editFun = {(user)=> this.editUser(user)} 
              dataUser={result}
              deleteUser={(id) => this.deleteUser(id)}
            ></Table>
            <User 
              add={(item)=>this.getNewUserData(item)} 
              visibleForm={this.state.status}>
            </User>
            
            </div>
            <div className="btn btn-block btn-danger" onClick={() => this.deleteLocalStorage()}>Remove localStorage</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
