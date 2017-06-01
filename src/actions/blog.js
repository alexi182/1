import dispatcher from '../dispatcher';
import * as constants from '../constants/blog';

function create({
    body,
    title
}) {
    let payload = {
        body,
        title,
        user: {
            name: 'test',
            login: 'test',
            id: 0
        },
        likes: 0,
        dislikes: 0
    };

    let action = {
        type: constants.CREATE,
        payload
    };

    dispatcher.dispatch(action);
}

function like(blogId) {
    let payload = {
        blogId
    };
    let action = {
        type: constants.LIKE,
        payload
    };

    dispatcher.dispatch(action);
}

function dislike(blogId) {
    let payload = {
        blogId
    };

    dispatcher.dispatch({
        type: constants.DISLIKE,
        payload
    });
}


export {
    create,
    like,
    dislike
};