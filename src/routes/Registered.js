import React from 'react';
import { connect } from 'dva';

import { TextField, Grid, Button, CircularProgress, Paper } from '../utils/materialUI';

import MainContainer from './MainContainer';
import MultiCard from '../components/MultiCard';

import styles from './Registered.css';

const Registered = ({ uistate, post, loading, dispatch }) => {

  // action

  // render

  return (
    <MainContainer pageTitle="注册">
      <Grid container spacing={8} className={styles.grid}>
        <Grid item xs={12} sm={6} className={styles.gridItem}>
          <Paper className={styles.paper}>
            <form Validate>
              <TextField id={'username'} autoFocus={true} label={'邮箱'} margin="normal" required /><Button raised color={'primary'}>获取验证码</Button>
              <TextField id={'username'} label={'用户名'} fullWidth={true} margin="normal" required />
              <TextField id={'pwd'} label={'密码'} type={'password'} fullWidth={true} margin="normal" required />
              <TextField id={'username'} label="验证码" fullWidth={true} margin="normal" required />
            </form>
            <Button raised color={'primary'}>提交</Button>
          </Paper>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

Registered.propTypes = {
};

function mapStateToProp({ uistate, post, loading }) {
  return {
    uistate: uistate,
    post: post,
    loading: loading,
  };
};

export default connect(mapStateToProp)(Registered);
