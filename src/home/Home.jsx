import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export { Home };
function Home() {
    const auth = useSelector((x) => x.auth.value);
    // const history = useHistory()
    const userData = localStorage.getItem('auth');
    
    // if (JSON.parse(userData).role == "Auditor") {
    // //   history.push('/');
    // window.location.href = '/audit';
    // }
    // else if(JSON.parse(userData).role === "Auditor"){
    //     window.location.href = '/audit';

    // }
    return (
        <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>You're logged in with React 18 + Redux & JWT!!</p>
            <p><Link to="/users">Manage Users</Link></p>
        </div>
    );
}
