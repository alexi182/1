export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul class="nav navbar-nav">
                { this.props.children }
            </ul>
        );
    }
}