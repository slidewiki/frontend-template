import {BaseStore} from 'fluxible/addons';

class HomePageStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.componentsStatus = {'TopMenu': {visible: 1, columnSize: 4}};
    }
    updateContent(payload) {
        //update the states
        this.emitChange();
    }
    getState() {
        return {
            componentsStatus: this.componentsStatus
        };
    }
    dehydrate() {
        return this.getState();
    }
    rehydrate(state) {
        this.componentsStatus = state.componentsStatus;
    }
}

HomePageStore.storeName = 'HomePageStore';
HomePageStore.handlers = {
    'UPDATE_Home_PAGE_CONTENT': 'updateContent'
};

export default HomePageStore;
