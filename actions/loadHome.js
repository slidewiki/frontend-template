import {shortTitle} from '../configs/general';

export default function loadHome(context, payload, done) {
    let pageTitle = shortTitle + ' | Home Page';
    context.dispatch('UPDATE_PAGE_TITLE', {
        pageTitle: pageTitle
    });
    done();
}
