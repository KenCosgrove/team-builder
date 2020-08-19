import React from 'react'

const Form = (props) => {

    const {update, submit, values} = props

    const onChange = event=>{
        const {name, value} = event.target
        update(name, value)
    }
    const onSubmit = event=>{
        event.preventDefault()
        submit()
    }

    return (
            <form onSubmit={onSubmit}>
                <label>
                    Name: <input type="text" name="name" placeholder='name' onChange={onChange} value={values.name}/> 
                </label>
               <br/>
                <label>
                    Email: 
                    <input type="email" placeholder='email' name='email' onChange={onChange} value={values.email}/>
                </label>
                <br/>
                <label>
                    Role: 
                    <select onChange={onChange} value={values.role} name='role'>
                        <option value='role'>Select Your Role</option>   
                        <option value='backend'>Backend</option>  
                        <option value='frontend'>Frontend</option>  
                        <option value='UI'>UI</option>  
                        <option value='UX'>UX</option>            
                    </select>
                    </label>
                    <br/>
                    <button>Submit!</button>
            </form>
    )
}

export default Form
