import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {history,location:{state}} = this.props;

        if(!state) {
            history.push('/');
        }
    }

    render() {
        const {location:{state}} = this.props;
        
        if (state) {
            return (
                <div>
                    {state.title}
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Detail;