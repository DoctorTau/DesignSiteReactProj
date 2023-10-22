import React from 'react';

interface WorkTableItemProps {
    title: string;
    text: string;
}

const WorkTableItem: React.FC<WorkTableItemProps> = ({ title, text }) => {
    return (
        <div className="work-table-item">
            <div className="work-table-item-title">{title}</div>
            <div className="work-table-item-text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default WorkTableItem;