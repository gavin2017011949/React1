import React, { Component } from 'react'

export default class Details extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topic/'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                
                     {/* <div>{this.state.data.title}</div>, */}
                    <div style={{fontSize:30,fontWeight:"bold",marginBottom:20,borderBottom:'1px solid #ddd'}} dangerouslySetInnerHTML={{__html:this.state.data.title}}></div>
                    <div style={{overflow:'hidden',textDecoration:'none'}} dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>      
            </div>
        )
    }
}
