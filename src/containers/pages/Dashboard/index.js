import React, { Component } from 'react';
import './Dashboard.scss';
import { addDataToAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    title: '',
    content: '',
    date: ''
  }

  handleUploadArticles = () => {
    const {title, content} = this.state;
    const {uploadArticles} = this.props;

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: this.props.userData.uid
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
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <textarea placeholder="content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>  
                    <button className="upload-btn" onClick={this.handleUploadArticles}> Upload </button>  
                </div>
                <hr/>
                <div className="card-content">
                  <p className="title"> Title </p>
                  <p className="date"> 23 Desember 2020 </p>
                  <p className="content"> Content Article </p>
                </div>
            </div>
        )
    }
  }

const reduxState = (state) => ({
  userData: state.user
})  

const reduxDispatch = (dispatch) => ({
  uploadArticles : (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);