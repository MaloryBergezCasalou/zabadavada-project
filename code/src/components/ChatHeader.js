import React,{ Component } from 'react';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

class ChatHeader extends Component {
    render() {
        return <div className="chatHeader">
                <div className="chatHeaderLeft">
                    <h3>
                        <span className="chatHeaderHash"># </span>
                        test Channel name
                    </h3>
                </div>
                <div className="chatHeaderRight">
                    <NotificationsIcon />
                    <EditLocationRoundedIcon />
                    <PeopleAltRoundedIcon />

                    <div className="chatHeaderSearch">
                        <input placeholder="Search" />
                        <SearchRoundedIcon />
                    </div>
                    <SendRoundedIcon />
                    <HelpRoundedIcon />
                </div>
            </div>
    }
}

export default ChatHeader
