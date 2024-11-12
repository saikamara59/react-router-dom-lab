import React from 'react';
import { Link } from 'react-router-dom';
// import './MailboxList.css'; // Assuming you have a CSS file for styling

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            {mailboxes.map((mailbox) => (
                <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
                    <div>{mailbox._id}</div>
                </Link>
            ))}
        </div>
    );
};

export default MailboxList;