import React from 'react';

export default class LoginApp extends React.Component {
    state = {
        // usernameValue: undefined,
        // passwordvalue: undefined,
        userNameError: undefined,
        passwordError: undefined,
        teams : ['Operations', 'Development', 'Management']
        
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.elements.UserName.value;
        const password = e.target.elements.Password.value;

            if (!userName || !password){
                if (!userName && !password){
                    this.setState(() => ({
                        userNameError: true,
                        passwordError: true
                    }));  
                } else if (!userName){
                    this.setState(() => ({
                        userNameError: true
                    })); 
                } else if (!password){
                    this.setState(() => ({
                        passwordError: true
                    }));              
                }                     
            } else {
              this.setState(() => ({
                  userNameError: false,
                  passwordError: false
              })); 
            }
            e.target.elements.UserName.value = ''; 
            e.target.elements.Password.value = '';            
    }   

    render(){
        return(   
            <div>
                <section id='login-control'>
                    {/* <img src='logo.png'/>    */}
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <h2>Welcome to Promapp</h2>
                                <ul>
                                    <li>
                                        <input  id='UserName' name='Username' placeholder='Username' type='text'  ></input>
                                    </li>
                                        
                                    <li>
                                        <input id='Password' name='Password' placeholder='Password' type='password' ></input>
                                    </li>
                                    <li>
                                        <select id='Team' name='Team' placeholder='Team'>                                     
                                        {this.state.teams.map((team, index) =>{
                                             return  <option  key={index+1}value={team}>{team}</option>
                                         })}                                        
                                        </select>
                                    </li>
                                </ul>  
                                        <a href='#forgotten-password'>Forgot username or password? Click here. </a>
                                  
                                <div>
                                    <input type="submit" name='login' value="Submit"  />
                                    <input id='RememberMe' name='RememberMe' type='checkbox' value='false'></input>
                                    <label htmlFor="RememberMe">Remember Me?</label>
                                </div>

                             <div className='validation-summary'>{(this.state.passwordError || this.state.userNameError ) ? 'Invalid Credentials' :  (this.state.userNameError === undefined || this.state.passwordError === undefined) ? '' : "Accepted"  }</div>
                        </fieldset>
                    </form>
                </section>
            </div>                  
        );
    }
}