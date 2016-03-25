//general app config
import {shortTitle, fullTitle} from '../configs/general';
//list of actions
import loadHome from '../actions/loadHome';

export default {
    //-----------------------------------HomePage routes------------------------------
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        handler: require('../components/Home/Home'),
        action: (context, payload, done) => {
            context.executeAction(loadHome, payload, done);
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'SlideWiki -- About',
        handler: require('../components/Home/About'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: shortTitle + ' | About'
            });
            done();
        }
    }
};
