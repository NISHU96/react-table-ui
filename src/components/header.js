import React from 'react';
import SimpleTable from './simpletable';
import {TextField,AppBar,Toolbar,Typography,withStyles} from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
    resize: {
        fontSize:20
    }
});


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
    }

    handleChangeOne(e) {
        this.setState({ inputvalue1: e.target.value });
    }

    handleChangeTwo(e) {
        this.setState({ inputvalue2: e.target.value });
    }

    handleAddButton(e) {
        if (this.state.inputvalue1 && this.state.inputvalue2) {
            const nestArray = [];
            nestArray.push(this.state.inputvalue1);
            nestArray.push(this.state.inputvalue2);
            nestArray.push(this.state.isChecked === true ? "True" : "False");
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
        axios.post('https://reqres.in/api/users',{
                "name": "morpheus",
                "job": "leader"
            })
            .then((response) => {
                console.log(response);
                if(response) {
                    this.setState({
                        data : [],
                        isChecked : false
                    })
                }
            })
            .catch((error) => {
                alert(error);
            })
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
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <TextField
                    id="name"
                    className={this.props.textField}
                    InputProps={{
                        classes: {
                            input: this.props.classes.resize
                        }
                    }}
                    placeholder="ENTER YOUR URL HERE"
                    margin="none"
                    style = {{width: 400}}
                    onChange={this.handleUrlChange}
                />
                </div>
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

export default withStyles(styles)(Header);