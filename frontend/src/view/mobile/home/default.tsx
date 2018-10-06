import * as React from 'react';
import { Core } from '../../../core';
import { Banner } from '../../components/banner';

interface Props {
    core:Core;
}

interface State {

}

export class HomeDefault_m extends React.Component<Props, State> {
    public render () {
        return (<div>
            <Banner core={this.props.core} />
        </div>);
    }
}