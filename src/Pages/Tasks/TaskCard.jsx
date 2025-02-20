

const TaskCard = ({title, index, status, id, setActiveTask}) => {
    
    return (
        <div draggable onDragStart={() => setActiveTask(index)} onDragEnd={() => setActiveTask(null)}>
            <p>{title}</p>
        </div>
    );
};

export default TaskCard;