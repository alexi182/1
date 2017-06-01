import { autobind } from 'core-decorators';

import BlogList from '../components/blogList';

import * as actions from '../actions/blog';
import { CHANGE } from '../constants/blog';
import store from '../stores/blog';

@autobind()
export default class BlogsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: store.Blogs
        };
    }

    update() {
        this.setState({
            blogs: store.Blogs
        });
    }

    componentWillMount() {
        store.addListener(CHANGE, this.update);
    }

    componentWillUnmount() {
        store.removeListener(CHANGE, this.update);
    }

    like(blogId) {
        actions.like(blogId);
    }

    dislike(blogId) {
        actions.dislike(blogId);
    }

    add({ title, body }) {
        actions.create({ title, body });
    }

    render() {
        return (
            <div>
                <h2 class="text-center">Blogs</h2>
                <BlogList like={this.like} dislike={this.dislike} add={this.add} blogs={this.state.blogs} />
            </div>
        );
    }
}