import React from 'react';
import MainInfo from '../MainInfo';
import MoreInfo from '../MoreInfo';
import MoreButton from '../MoreButton';

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { ui, actions } = this.props;
    const more = ui.showMore
      ? <MoreInfo />
      : ''

    return (
      <div>
        <MainInfo />
        <MoreButton actions={actions} ui={ui} />
        {more}
      </div>
    );
  }
}

export default MainPage;
