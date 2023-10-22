import React from 'react';
import './styles/work-style.css';
import WorkTableItem from './WorkTableItem';

interface WorkProps {
    title: string;
    description: string;
    workTableItems: { title: string; text: string }[];
}

const Work: React.FC<WorkProps> = ({ title, description, workTableItems }) => {
    return (
        <div className="work">
            <div className="work-title">
                <h2>{title}</h2>
            </div>

            <div className="work-desc">
                <p>{description}</p>
            </div>

            <div className="work-table">
                {workTableItems.map((item, index) => (
                    <div>
                        <WorkTableItem key={index} title={item.title} text={item.text} />
                        {index !== workTableItems.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Work;