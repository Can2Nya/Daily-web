import React from 'react';
import { connect } from 'dva';

import { TextField, Grid, Button, CircularProgress, Paper } from '../utils/materialUI';

import MainContainer from './MainContainer';

import styles from './Registered.css';

const Login = ({ uistate, user, loading, dispatch }) => {

  const { form } = user;

  // action

  const setLoginVal = (e) => {
    // 设置表单值
    dispatch({
      type: 'user/setForm',
      payload: {
        ...form,
        [e.target.id]: e.target.value,
      },
    });
  };

  const postLogin = () => {
    // 登陆
    dispatch({
      type: 'user/auth',
      payload: form,
    });
  };
  // render
  return (
    <MainContainer pageTitle="登陆">
      <Grid container spacing={8} className={styles.grid}>
        <Grid item xs={12} sm={6} className={styles.gridItem}>
          <Paper className={styles.paper}>
            <form className={styles.form}>
              <TextField id={'email'} autoFocus={true} label={'邮箱'} fullWidth={true} margin="normal" required
                onChange={setLoginVal}
              />
              <TextField id={'password'} label={'密码'} type={'password'} fullWidth={true} margin="normal" required
                onChange={setLoginVal}
              />
            </form>
            <Button raised color={'primary'}
              onClick={postLogin}
            >登陆
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </MainContainer>
  )
};

Login.propTypes = {
};

function mapStateToProp({ uistate, user, loading }) {
  return {
    uistate: uistate,
    user:user,
    loading: loading,
  };
};

export default connect(mapStateToProp)(Login);