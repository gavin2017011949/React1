import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Job from './Job';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className="head">
                    <Link to={url+'?tab=all'} className="a">全部</Link>
                    <Link to={url+'?tab=good'} className="a">精华</Link>
                    <Link to={url+'?tab=share'} className="a">分享</Link>
                    <Link to={url+'?tab=ask'} className="a">问答</Link>
                    <Link to={url+'?tab=job'} className="a">招聘</Link>
                </div>
                <div>
                <Route path={`${url}`} component={All} />
                    {/* <Route path={`${url}`} component={Good} /> */}
                    {/* <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/job`} component={Job} /> */}
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
            </div>
        )
    }
}