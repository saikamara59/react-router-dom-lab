import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    
    if (!selectedBox) {
        return <h2>Mailbox Not Found!</h2>;
    }

    return (
        <>
            <h2>{selectedBox.boxholder}</h2>
            <dl>
                <dt>Location</dt>
                <dd>{selectedBox.location}</dd>
                <dt>Size</dt>
                <dd>{selectedBox.boxsize}</dd>
                <dt>Price</dt>
                <dd>{selectedBox.price}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;