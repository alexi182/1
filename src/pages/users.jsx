import { Link } from 'react-router';
import { autobind } from 'core-decorators';


@autobind()
export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [1,2,3,4,5,6,7,8,9,10]
        };
    }

    goToBlogs() {
        this.props.router.push('/blogs');
    }

    render() {
        if (this.props.children)
            return <div>
                { this.props.children }
            </div>;

        let users = this.state.users.map((user, index) => 
            <div key={index}>
                <Link to={{ pathname: `/users/${index}`, query: { ppp: 1 } }}>Go to User: {index}</Link>
            </div>);

        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button type="button" onClick={this.goToBlogs}>Go Blogs</button>
                </div>
                { users }
            </div>
        );
    }
}