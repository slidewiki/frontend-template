import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class DefaultHTMLLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link href="/custom_modules/custom-semantic-ui/dist/semantic.min.css" rel="stylesheet" type="text/css" />
                <link href="/assets/css/custom.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                {/* Following are added only to support IE browser */}
                <script src="/bower_components/es5-shim/es5-shim.min.js"></script>
                <script src="/bower_components/es5-shim/es5-sham.min.js"></script>
                <script src="/bower_components/json3/lib/json3.min.js"></script>
                <script src="/bower_components/es6-shim/es6-shim.min.js"></script>
                <script src="/bower_components/es6-shim/es6-sham.min.js"></script>
                {/* Above are added only to support IE browser */}
                {/* All external vendors bundle*/}
                <script src="/public/js/vendor.bundle.js"></script>
                <script src="/bower_components/jquery/dist/jquery.min.js"></script>
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script src={'/public/js/' + this.props.clientFile}></script>
            </body>
            </html>
        );
    }
}

export default DefaultHTMLLayout;
