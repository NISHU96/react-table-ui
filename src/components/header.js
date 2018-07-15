import React from 'react';
import SimpleTable from './tableview';
import {TextField,AppBar,Toolbar,Typography} from '@material-ui/core';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'',
            inputvalue1: '',
            inputvalue2: '',
            data:[],
            isChecked: false
        };
        this.handleChangeOne = this.handleChangeOne.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    handleUrlChange(e) {
        this.setState({ url: e.target.value });
        console.log(this.state.url);
    }

    handleChangeOne(e) {
        this.setState({ inputvalue1: e.target.value });
    }

    handleChangeTwo(e) {
        this.setState({ inputvalue2: e.target.value });
    }

    handleAddButton(e) {
        console.log('add button');
        if (this.state.inputvalue1 && this.state.inputvalue2) {
            const nestArray = [];
            nestArray.push(this.state.inputvalue1);
            nestArray.push(this.state.inputvalue2);
            nestArray.push(this.state.isChecked);
            const array = this.state.data;
            array.push(nestArray);
            this.setState({ 
                data : array,
                inputvalue1:"",
                inputvalue2:"",
                isChecked: false
             });
        }else{
            alert('please enter required values');
        }
    }

    handleSwitchChange = name => event => {
        this.setState({ [name]: event.target.checked })
    }

    handleDelete(i) {
        this.setState({
            data : this.state.data.filter((innerArray) => {
                return innerArray[0] !== i;
            })
        })  
    }
    handleSubmitButton() {
        alert("submit clicked");
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default" style={{ marginBottom:"50px"}}>
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            REGEX VIEWER
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography align='center'>
                <TextField
                    id="name"
                    className={this.props.textField}
                    placeholder="ENTER YOUR URL HERE"
                    margin="normal"
                    style = {{width: 400}}
                    onChange={this.handleUrlChange}
                />
                </Typography>
                <SimpleTable
                    state={this.state}
                    onchangeone={this.handleChangeOne}
                    onchangetwo={this.handleChangeTwo}
                    handleAddButton={this.handleAddButton}
                    handleSwitchChange={this.handleSwitchChange}
                    handleDelete={this.handleDelete}
                    handleSubmitButton={this.handleSubmitButton}
                />
            </div>
        )
    }
}

export default Header;