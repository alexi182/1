import { autobind } from 'core-decorators';

@autobind()
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    like() {
        this.props.like(this.props.id);
    }

    dislike() {
        this.props.dislike(this.props.id);
    }

    render() {
        return (
            <div class="thumbnail">
                <img src="https://placehold.it/150x150" alt="image" />
                <div class="caption">
                    <h3>{this.props.title}</h3>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                {this.props.body}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <button type="button" class="btn btn-block btn-success" onClick={this.like}>
                                    Like { this.props.likes ? <span>({this.props.likes})</span> : null }
                                </button>
                            </div>
                            <div class="col-lg-4">
                                <button type="button" class="btn btn-block btn-danger" onClick={this.dislike}>
                                    Dislike { this.props.dislikes ? <span>({this.props.dislikes})</span> : null }
                                </button>
                            </div>
                            <div class="col-lg-4">
                                <button type="button" class="btn btn-block btn-default">Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    static propTypes = {
        likes: React.PropTypes.number.isRequired,
        dislikes: React.PropTypes.number.isRequired,
        body: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        user: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
            login: React.PropTypes.string.isRequired
        }).isRequired
    };

    static defaultProps = {
        likes: 0,
        dislikes: 0,
        user: {
            name: 'test',
            id: 0,
            login: 'test'
        }
    };
}