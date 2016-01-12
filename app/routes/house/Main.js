import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as BaiduActionCreators from '../../actions/baidu';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../actions/baidu';

class Main extends Component {
  componentDidMount() {
    console.log("componentDidMount:enter");
    const { dispatch, selectedReddit } = this.props
    dispatch (fetchPostsIfNeeded(selectedReddit))
    console.log("componentDidMount:exit");
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps:enter");
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
    console.log("componentWillReceiveProps:exit");
  }

  render() {
    console.log("render:enter");
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    console.log("render:exit");
    return (
      <div>
        <span>just empty for house</span>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  const { selectReddit, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectReddit] || {
    isFetching: true,
    items: []
  }
  return {
    selectReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

//export default connect(mapStateToProps)(Main)
export default connect()(Main);

