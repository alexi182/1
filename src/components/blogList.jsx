import { autobind } from 'core-decorators';
import Blog from './blog';

@autobind()
export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }

    addBlog() {
        let body = this.refs.body.value;
        let title = this.refs.title.value;

        this.props.add({ body, title });

        this.refs.body.value = '';
        this.refs.title.value = '';
    }

    render() {
        let blogs = this.props.blogs.map((blog, index) => <Blog like={this.props.like} dislike={this.props.dislike} key={index} {...blog} />);
        return (
            <div>
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        {blogs}
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        <form>
                            <div class="form-group">
                                <label class="control-label">Title</label>
                                <input ref="title" placeholder="Message Title" type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Body</label>
                                <input ref="body" placeholder="Message Body" type="text" class="form-control"/>
                            </div>
                            <div>
                                <button type="button" class="btn btn-block btn-success" onClick={this.addBlog}>Add Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}