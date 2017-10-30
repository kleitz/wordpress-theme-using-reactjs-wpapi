import React, { Component } from 'react'
import Blog from './blog';
import { connect } from 'react-redux';
import { fetchPostAction } from '../../action/fetchPost';

class Home extends Component {    
componentDidMount() {
this.props.fetchPostAction();
}
    render() {
        return (
            <div className="w3-light-grey">
                {/* <!-- w3-content defines a container for fixed size centered content,  */}
                {/* and is wrapped around the whole page content, except for the footer in this example --> */}
                <div className="w3-content" style={{ maxWidth: '1400px' }}>

                    {/* <!-- Header --> */}
                    <header className="w3-container w3-center w3-padding-32">
                        <h1><i>MY WORD "</i></h1>
                        <p>Welcome to<span className="w3-tag">My Word</span></p>
                        {/* <a href="./index.html" className="w3-button w3-green">View My Profile</a> */}
                    </header>

                    {/* <!-- Grid --> */}
                    <div className="w3-row">

                        {(this.props.post.success===true)?<Blog posts={this.props.post.data}/>:null }

                        {/* <!-- Introduction menu --> */}
                        <div className="w3-col l4">
                            {/* <!-- About Card --> */}
                            <div className="w3-card-2 w3-margin w3-margin-top">
                                <img src={'img/pp.jpg'} style={{ width: '100%' }} />
                                <div className="w3-container w3-white">
                                    <h4><b>Author</b></h4>
                                    <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a passion of programming. I want to share my idea within this blog.</p>
                                </div>
                            </div><hr />

                            {/* <!-- Posts --> */}
                            <div className="w3-card-2 w3-margin">
                                <div className="w3-container w3-padding">
                                    <h4>Popular Posts</h4>
                                </div>
                                <ul className="w3-ul w3-hoverable w3-white">
                                    <li className="w3-padding-16">
                                        <img src={'img/workshop.jpg'} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                                        <span className="w3-large">Lorem</span><br />
                                        <span>Sed mattis nunc</span>
                                    </li>
                                    <li className="w3-padding-16">
                                        <img src={'img/workshop.jpg'} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                                        <span className="w3-large">Ipsum</span><br />
                                        <span>Praes tinci sed</span>
                                    </li>
                                    <li className="w3-padding-16">
                                        <img src={'img/workshop.jpg'} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                                        <span className="w3-large">Dorum</span><br />
                                        <span>Ultricies congue</span>
                                    </li>
                                    <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                                        <img src={'img/workshop.jpg'} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                                        <span className="w3-large">Mingsum</span><br />
                                        <span>Lorem ipsum dipsum</span>
                                    </li>
                                </ul>
                            </div>
                            <hr />

                            {/* <!-- Labels / tags --> */}
                            <div className="w3-card-2 w3-margin">
                                <div className="w3-container w3-padding">
                                    <h4>Tags</h4>
                                </div>
                                <div className="w3-container w3-white">
                                    <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                                        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                                    </p>
                                </div>
                            </div>

                            {/* <!-- END Introduction Menu --> */}
                        </div>
                    </div>
                    <br />
                    {/* <!-- END w3-content --> */}
                </div>
                {/* <!-- Footer --> */}
                <footer className="w3-container w3-white w3-padding-32 w3-margin-top">
                    <p className="w3-center">By: Mohan pd.</p>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
    }
}

export default connect(mapStateToProps, { fetchPostAction })(Home);
