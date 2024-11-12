import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
    const [boxholder, setBoxholder] = useState('');
    const [boxSize, setBoxSize] = useState('Small');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox({ boxholder, boxSize });
        setBoxholder('');
        setBoxSize('Small');
        navigate('/mailboxes');
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'boxholder') {
            setBoxholder(value);
        } else if (id === 'boxSize') {
            setBoxSize(value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="boxholder">Boxholder</label>
                <input
                    type="text"
                    id="boxholder"
                    value={boxholder}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="boxSize">Box Size</label>
                <select
                    id="boxSize"
                    value={boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <button type="submit">Add Mailbox</button>
        </form>
    );
};

export default MailboxForm;






