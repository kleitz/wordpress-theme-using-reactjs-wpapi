import React, { Component } from 'react'
import  { connect } from 'react-redux';
class SinglePost extends Component {



    handlePost(){
        let post = Object.keys(this.props.posts).map(key=>{    
         let data = this.props.posts[key];
         console.log(data)
        return(
            < div key={key} className= "w3-card-4 w3-margin w3-white" >
                <img src={'img/woods.jpg'} alt="Nature" style={{ width: '100%' }} />
                <div className="w3-container">
                    <h3><b>{this.props.posts[key].title.rendered}</b></h3>
                    <h5><span className="w3-opacity">{data.date}</span></h5>
                </div>

                <div className="w3-container">
                    <div dangerouslySetInnerHTML={{__html:data.content.rendered }} />
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
           )
        }); 
     return post;    
    }



    render() {
        var post = this.handlePost();
        //{console.log(this.props.posts)}
        return (
        <div className="w3-col l8 s12" >
        {post}
    {/* <!-- END BLOG ENTRIES --> */}
</div>
    )
  }
}

function mapStateToProps(state){
    return{
        post: state.post,
    }
}

export default connect(mapStateToProps)(SinglePost)