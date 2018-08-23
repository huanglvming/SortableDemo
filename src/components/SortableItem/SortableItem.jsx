import React from 'react';

class SortableItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="sortable-item" style={{
                height: 30,
                lineHeight: '30px',
                textAlign: 'center',
                border: '1px solid #eee',
                cursor: 'pointer',
                background: '#eee',
                marginBottom: '2px'
            }}>{this.props.name}</div>
        )
    }
}

export default SortableItem;