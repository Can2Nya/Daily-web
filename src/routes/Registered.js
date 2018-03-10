import React from 'react';
import { connect } from 'dva';

import { TextField, Grid, Button, CircularProgress, Paper } from '../utils/materialUI';

import MainContainer from './MainContainer';

import styles from './Registered.css';

const Registered = ({ uistate, user, loading, dispatch }) => {

  const { form } = user;
  // action
  // 验证邮箱
  const getValidationEmail = () => {
    dispatch({
      type: 'user/validationEmail',
      payload: form,
    });
  };

  const setRegisterVal = (e) => {
    // 设置注册表单值
    const formValue = () => {
      if (e.target.type === 'number') return Number(e.target.value);
      return e.target.value;
    };
    dispatch({
      type: 'user/setForm',
      payload: {
        ...form,
        [e.target.id]: formValue(),
      },
    });
  };
  // 提交注册表单
  const postRegister = () => {
    // if (register.has)
    dispatch({
      type: 'user/register',
      payload: form,
    });
  };
  // render

  return (
    <MainContainer pageTitle="注册">
      <Grid container spacing={8} className={styles.grid}>
        <Grid item xs={12} sm={6} className={styles.gridItem}>
          <Paper className={styles.paper}>
            <form className={styles.form}>
              <div>
                <TextField id={'email'} autoFocus={true} label={'邮箱'} margin="normal" required className={styles.inputMail}
                  onChange={setRegisterVal}
                />
                <Button raised className={styles.button} color={'primary'}
                  onClick={getValidationEmail}
                >验证码</Button>
              </div>
              <TextField id={'username'} label={'用户名'} fullWidth={true} margin="normal" required 
                onChange={setRegisterVal}
              />
              <TextField id={'password'} label={'密码'} type={'password'} fullWidth={true} margin="normal" required 
                onChange={setRegisterVal}
              />
              <TextField id={'verify_code'} label="邮箱验证码" fullWidth={true} margin="normal" required type="number"
                onChange={setRegisterVal}
              />
            </form>
            <Button raised color={'primary'}
              onClick={postRegister}
            >提交
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

Registered.propTypes = {
};

function mapStateToProp({ uistate, user, loading }) {
  return {
    uistate: uistate,
    user:user,
    loading: loading,
  };
};

export default connect(mapStateToProp)(Registered);
