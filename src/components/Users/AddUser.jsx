import React ,{useState }from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser=(props)=> {
    const [enteredUserName,setEnteredUserName]=useState('')
    const changeUserNameHandler=(e)=>{
        setEnteredUserName(e.target.value)
    }

    const [enteredAge,setEnteredAge]=useState('')
    const changeAgeHandler=(e)=>{
        setEnteredAge(e.target.value)
    }
    const[error,setError]=useState();

    const addUserHandler=(e)=>{
        e.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({title:"invalid input",message:"plz enter valid name and age"})
            return
        }
        if(+enteredAge<1){
            setError({title:"invalid age",message:"plz enter valid age (>0)"})
            return;
        }
        props.onAddUser(enteredUserName ,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }
   const errorCloseHandler=()=>{
       setError(null)
   }
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorCloseHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input type="text" name="" id="username" onChange={changeUserNameHandler} value={enteredUserName} />
            <label htmlFor="age" >Age</label>
            <input type="number" name="" id="age" onChange={changeAgeHandler} value={enteredAge}/>
            <Button type="submit"> AddUser</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser
