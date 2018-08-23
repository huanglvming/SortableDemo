import React from 'react';
import Sortable  from 'sortablejs';
import SortableContainer from '../../components/SortableContainer';
import SortableItem from '../../components/SortableItem';
import './entry.css';

class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            group: [1,2,3],
            list: [1,2,3,4,5],
        }
    }

    componentDidMount() {
        const el = document.getElementById('container');
        Sortable.create(el, {
            group: 'parent-group',
            animation: 150,
        });

        const child = document.getElementsByClassName('foo');
        for(var i = 0;i < child.length;i++) {
            new Sortable(child[i], {
                group: {
                    name: 'child-group',
                    pull: true,
                },
                // forceFallback: true,
                // fallbackClass: 'clone_card',  
            });
        }
        
    }

    render() {
        return (
            <div className="entry-container" id="container" style={{
                padding: '20px'
            }}>
                {
                    this.state.group.map((item, i) => {
                        // return <SortableContainer key={`group-${index}`} group={index}></SortableContainer>
                        return (
                            <div className="sortable-container" 
                                className="foo"
                                key={`foo-${i}`}
                                style={{
                                padding: '15px',
                                margin: "30px 0",
                                border: '1px solid green',
                            }}>
                                {
                                    this.state.list.map((item, index) => {
                                        return <SortableItem name={ `${i}-${item}`} key={`item-${i}-${index}`} />
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Entry;