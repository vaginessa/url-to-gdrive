/**
 * Created by SuhairZain on 4/6/16.
 */

import React, {Component} from 'react';

class App extends React.Component {
    styles = {
        root: {
            backgroundColor: '#f44336',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        content: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
            overflowY: 'auto'
        },
        title: {
            color: '#FFFFFF',
            fontSize: '3em'
        },
        inputAndButton: {
            display: 'flex',
            width: '100%'
        },
        input: {
            flexGrow: 1
        },
        footer: {
            backgroundColor: '#d32f2f',
            display: 'flex',
            justifyContent: 'space-around'
        },
        footerLink: {
            color: '#ffcdd2'
        }
    };

    renderButton = (url) => {
        gapi.savetodrive.render('save-drive-button', {
            src: 'https://sz-node-proxy.herokuapp.com/' + url,
            filename: 'My Statement.pdf',
            sitename: 'My Company Name'
        });
    };

    componentDidMount = () => {
        this.renderButton('http://s3.amazonaws.com/akamai.netstorage/HD_downloads/earth_night_rotate_1080.mov');
    };

    handleUrlChange = (evt) => {
        this.renderButton(evt.target.value);
    };

    render() {
        return (
            <div style={this.styles.root}>
                <div style={this.styles.content}>
                    <span style={this.styles.title}>Upload from a Url to your Google Drive</span>
                    <div style={this.styles.inputAndButton}>
                        <input onChange={this.handleUrlChange} style={this.styles.input}/>
                        <div id="save-drive-button"></div>
                    </div>
                </div>
                <div style={this.styles.footer}>
                    <a style={this.styles.footerLink} href="https://github.com/SuhairZain">Source</a>
                    <a style={this.styles.footerLink} href="http://superuser.com/a/740154">Inspiration</a>
                </div>
            </div>
        );
    }
}

export default App;