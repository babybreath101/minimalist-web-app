import React, { Component, Fragment } from 'react';
import './Dashboard.scss';
import { addDataToAPI, getDataFromAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    title: '',
    content: '',
    date: ''
  }

  // componentDidMount () {
  //   const userData = localStorage.getItem('userData')
  //   console.log('dashboard :', JSON.parse(userData))
  // }

  // getDataFirebase = () =>  {
  //   const starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
  // }

  componentDidMount () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    this.props.getArticles(userData.uid);
  }

  handleUploadArticles = () => {
    const {title, content} = this.state;
    const {uploadArticles} = this.props;
    const userData = JSON.parse(localStorage.getItem('userData'))

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid
    }
    uploadArticles(data)
    console.log(data)
  }

  onInputChange = (e, type) => {
    this.setState ({
      [type] : e.target.value
    })
  }

    render() {
      const {title, content, date} = this.state;
      const {articles} = this.props;
      console.log('articles: ', articles);
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <textarea placeholder="content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>  
                    <button className="upload-btn" onClick={this.handleUploadArticles}> Upload </button>  
                </div>
                <hr/>
                {
                  articles.length > 0 ? (
                    <Fragment>
                      {
                        articles.map(article => {
                          return (
                            <div className="card-content" key={article.id}>
                              <p className="title"> {article.data.title} </p>
                              <p className="date"> {article.data.date} </p>
                              <p className="content"> {article.data.content} </p>
                            </div>
                          )
                        })
                      }
                    </Fragment>
                    
                  ) : null
                }
                
            </div>
        )
    }
  }

const reduxState = (state) => ({
  userData: state.user,
  articles: state.articles
})  

const reduxDispatch = (dispatch) => ({
  uploadArticles : (data) => dispatch(addDataToAPI(data)),
  getArticles : (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);