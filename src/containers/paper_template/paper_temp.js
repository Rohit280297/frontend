import React, { Component } from 'react';
import {Skeleton,List,Icon} from 'antd';
import './paper_template.css';
const data = [{
  title:"VoxelMorph : A Learning Framework for Image Registration.",
  abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
 title:"VoxelMorph : A Learning Framework for Image Registration.",
 abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop  publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
title:"VoxelMorph : A Learning Framework for Image Registration.",
abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing  software like Aldus PageMaker including versions of Lorem Ipsum."
}];

const IconComp = ({type,text})=>(
  <span>
    <Icon type={type} style={{marginRight:"8px"}}/>{text}
  </span>
)

class PaperComponent extends Component {

  state={
    loading:true
  }


  componentDidMount =()=>{
    setTimeout(()=>this.setState({loading:false}),5000);
}

  render() {

    const {loading}  = this.state;


    return (
      <div className="paper_template">
        <List dataSource={data}itemLayout="vertical" renderItem={item=>(
              <List.Item key={item.title} style={{"textAlign":"left"}}
              actions={!loading && [<IconComp type="star-o" text="20"/>,<IconComp type="like-o" text="100"/>]}>
              <Skeleton loading={loading} avatar active>
                <List.Item.Meta 
                title ={item.title}
                abstract = {item.abstract}
                />
                {item.title}
                {item.abstract}
              </Skeleton> 
             </List.Item>
        )}/>
      </div>
    );
  }
}

export default PaperComponent;
