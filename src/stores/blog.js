import {
    EventEmitter
} from 'events';
import {
    autobind
} from 'core-decorators';
import dispatcher from '../dispatcher';
import * as constants from '../constants/blog';
import axios from 'axios';

@autobind()
class BlogStore extends EventEmitter {
    constructor() {
        super();

        this.url = 'https://jsonplaceholder.typicode.com/posts/';
        this.blogs = [];

        axios.get(this.url)
            .then((response) => {
                this.blogs = response.data;
                this.emit(constants.CHANGE);
            });
    }

    get Blogs() {
        return this.blogs.slice(0);
    }

    create(blog) {
        let maxId = Math.max(...this.blogs.map(b => b.id));
        
        blog.id = maxId + 1;

        this.blogs.push(blog);
        this.emit(constants.CHANGE);
    }

    like({blogId}) {
        let blog = this.blogs.find(b => b.id == blogId);

        if (!blog) return;
        if (!blog.likes) blog.likes = 0;

        blog.likes++;
        this.emit(constants.CHANGE);
    }

    dislike({blogId}) {
        let blog = this.blogs.find(b => b.id == blogId);

        if (!blog) return;
        if (!blog.dislikes) blog.dislikes = 0;

        blog.dislikes++;
        this.emit(constants.CHANGE);
    }

    handleActions(action) {
        switch (action.type) {
            case constants.CREATE:
                {
                    this.create(action.payload);
                    break;
                }
            case constants.LIKE:
                {
                    this.like(action.payload);
                    break;
                }
            case constants.DISLIKE:
                {
                    this.dislike(action.payload);
                    break;
                }
        }
    }
}

const store = new BlogStore();

dispatcher.register(store.handleActions);

export default store;