import React from 'react';
import classNames from 'classnames/bind';
import {connectToStores} from 'fluxible-addons-react';
import HomePageStore from '../../stores/HomePageStore';

class Home extends React.Component {
    render() {
        return (
            <div ref="home">
                <div className="ui grid">
                    <div className="row">
                        <div className="column padding-reset">
                            <div className="ui huge message page grid">
                                <h1 className="ui huge header">SlideWiki</h1>
                                <p>SlideWiki aims to revolutionize the way how educational material is authored, shared and used.</p>
                                <a className="ui blue button" href="">Learn more &raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui hidden divider"></div>
                <div className="ui page grid  stackable">
                    <div className="three column row">
                        <div className="column">
                          <h2 className="ui header">Features</h2>
                          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                        </div>
                        <div className="column">
                            <h2 className="ui header">Presentations</h2>
                            <div>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                            </div>
                        </div>
                        <div className="column">
                          <h2 className="ui header">User Activities</h2>
                          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
Home = connectToStores(Home, [HomePageStore], (context, props) => {
    return {
        HomePageStore: context.getStore(HomePageStore).getState()
    };
});
export default Home;
