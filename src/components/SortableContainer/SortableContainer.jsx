import React from 'react';
// import Sortable from 'react-sortablejs';
import Sortable  from 'sortablejs';
import SortableItem from '../SortableItem';

class SortableContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [1,2,3,4,5],
        }
    }

    componentDidMount() {
        this.initSortable();
    }

    initSortable = (id) => {
        const el = document.getElementById('foo');
        new Sortable(el, {
            group: 'bar', //string 分组名
            disable: true, //对象能否拖动 默认true
        });
    }

    render() {
        return (
            <div className="sortable-container" id="foo" style={{
                padding: '15px',
                border: '1px solid #eee',
            }}>
                <div style={{paddingBottom: '15px', textAlign: 'left'}}>{`group-${this.props.group}`}</div>
                {
                    this.state.list.map((item, index) => {
                        return <SortableItem name={item} key={`item-${index}`} />
                    })
                }
            </div>
        )
    }
}

export default SortableContainer;