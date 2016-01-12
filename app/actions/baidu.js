import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export const SELECT_REDDIT = 'SELECT_REDDIT'
export function selectReddit(reddit) {
  console.log ("action selectReddit");
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export function invalidateReddit(reddit) {
  console.log ("action invalidateReddit");
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts (reddit) {
  console.log ("action requestPosts ");
    return {
        type: REQUEST_POSTS,
        reddit
    }
}

export const RECEIVE_POSTS = "RECEIVE_POSTS";
function receivePosts(reddit, json) {
  console.log ("action receivePosts");
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.imgs.map(child => child.objURL),
        receiveAt: Date.now()
    }
}

function fetchPosts (reddit) {
  console.log ("action fetchPosts");
    return function (dispatch) {
        dispatch(requestPosts(reddit))

        /*var req = new Request("/apis/cors?a=1&b=2", {
            method:"POST", 
            headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
            body: "word=beauty&cg=blue&error=true"
            });*/
        var req = new Request("/apis/cors?a=1&b=2", {
            method:"POST", 
            headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
            body: "word="+reddit+"&cg=blue"
            });
        //var url = `http://image.baidu.com/search/avatarjson?tn=resultjsonavatarnew&ie=utf-8&word=${reddit}`;
        //var url = '/apis/cors';

        return fetch(req)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch (receivePosts(reddit, json))
            }).catch(err => {
                console.log ("get error:"+err);
                // receive fail, need add a fail action?
                
            })
    
    }
}

function shouldFetchPosts (state, reddit) {
  console.log ("action shouldFetchPosts ");
    const posts = state.postsByReddit[reddit]
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate
    }
}

/*
export function fetchPostsIfNeeded(reddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts (getState(), reddit)) {
            return dispatch(fetchPosts(reddit))
        } else {
            return Promise.resolve()
        }
    }
}*/
export function fetchPostsIfNeeded(reddit) {
  console.log ("action fetchPostsIfNeeded");
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
  }
}
