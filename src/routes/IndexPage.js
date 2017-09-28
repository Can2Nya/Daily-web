import React from 'react';
import { connect } from 'dva';

import { Grid, Button, CircularProgress } from '../utils/materialUI';

import MainContainer from './MainContainer';
import MultiCard from '../components/MultiCard';

import styles from './IndexPage.css';

const IndexPage = ({ uistate, post, loading, dispatch }) => {

  const { appbar } = uistate;

  // action

  const setNextPage = () => {
    // let mode = '';
    if (post.is_next) {
      dispatch({
        type: 'post/setPage',
        payload: {
          is_select_page: post.is_select_page + 1,
        },
      });
      // if (post.is_searched === true) mode = 'search';
      dispatch({
        type: 'post/fetch',
        // mode: mode,
        // payload: {
        //   ...post,
        //   is_select_page: post.is_select_page + 1,
        // },
      });
    }
  };

  // render
  const renderMultiCard = () => {
    if (post.post.length <= 0 || post.post === undefined) return;
    return (
      post.post.map((info, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
            <MultiCard post={info} />
          </Grid>
        );
      })
    );
  };

  const renderLoading = () => {
    if (loading.models.post === true) {
      return (
        <div className={styles.progress}>
          <CircularProgress size={50} />
        </div>
      );
    }
    return (
      <div className={styles.button}>
        <Button raised color={'primary'} onClick={setNextPage}>加载更多</Button>
      </div>
    );
  };

  return (
    <MainContainer pageTitle={post.source_name[post.is_select_source]}>
      <Grid container gutter={8} className={styles.grid}>
        { renderMultiCard() }
      </Grid>
      { renderLoading() }
    </MainContainer>
  );
};

IndexPage.propTypes = {
};

function mapStateToProp({ uistate, post, loading }) {
  return {
    uistate: uistate,
    post: post,
    loading: loading,
  };
};

export default connect(mapStateToProp)(IndexPage);
