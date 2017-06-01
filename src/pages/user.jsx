import {Link} from 'react-router';

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);

        //this.props
        //.router - то что позволяет управлять роутером
        //.route - описание текущего роута
        //.params - переданные параметры роута
        //.location - window.location

        console.dir(this.props);
    }

    render() {
        return (
            <div>
                <h2>User { this.props.params.userId }</h2>
                <Link to="/users">Go back</Link>
            </div>
        );
    }
}