import classes from './LoginForm.module.css';
import { Input, Button } from '../../../../shared/components';
import { AuthIntro } from '../AuthIntro';

export function LoginForm(): React.ReactElement {
  return (
    <div className={classes.Auth}>
      <div className={classes.Auth_Col}>
          <AuthIntro />
        </div>
        <div className={classes.Auth_Col}>
            <form className={classes.Auth_Form}>
                <h3>Welcome Back ! <br/> Please Sign in now</h3>
                <Input type="text" placeholder="User name" />
                <Input type="password" placeholder="Password"/>
                <div className={classes.Auth_btn}>
                    <Button btnType="Auth_Login_btn">Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}