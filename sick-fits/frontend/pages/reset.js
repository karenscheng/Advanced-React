import ResetPage from '../components/ResetPage';

const Reset = props => (
    <div>
        <p>Reset your password {props.query.resetToken}</p>
        <ResetPage resetToken={props.query.resetToken}></ResetPage>
    </div>
);

export default Reset;