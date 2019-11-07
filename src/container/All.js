import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class All extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.location.search;
        fetch('https://cnodejs.org/api/v1/topics'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search){
            let page = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                        console.log(res.data);
                    })
        }
    }
    render() {
        var last=this.props.location.search.split("&")[0]?this.props.location.search.split("&")[0]:'?tab=all';
        return (
            <div className="all">
                {
                    this.state.data.map((item)=>(
                        <div className="li">
                            <img src={item.author.avatar_url} alt={item.author.loginname}style={{width:37,height:37,marginLeft:5,float:'left'}}/>
                            <div className="num">
                                <span style={{marginLeft:10,color:'#808080'}}>{item.reply_count}/</span>
                                <span style={{fontSize:10,color:'#708090'}}>{item.visit_count}</span>
                            </div>
                            <Link to={'/topic/'+item.id} style={{textDecoration:'none',color:'#000',width:220,marginLeft:10,lineHeight:3,fontSize:14,overflow:'hidden'}}>{item.title}</Link>
                            <span style={{marginRight:5,color:'#808080',float:'right',fontSize:11,marginTop:10}}>8小时前</span>
                            <img src={require('./hair.jpg')}style={{width:37,height:37,float:'right',marginRight:10}}/>
                            
                        </div>
                    ))
                }
                 {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <li className="ten"><Link to={`${last}&page=${item}`}>{item}</Link></li>)
                    )
                }
            </div>
        )
    }
}