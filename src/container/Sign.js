import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Sign extends Component {
    render() {
        return (
            <div className='sign'>
                <div className="sign1">
                    <p>用户名</p>
                    <input type='text' name='name' /><br/>
                    <p>密码</p>
                    <input type='password' name='password' /><br/>
                    <Link to='/home'><button type="button">登录</button></Link>
                </div>
            </div>
        )
    }
}