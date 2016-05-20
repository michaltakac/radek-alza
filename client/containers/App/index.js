
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainPage from '../../components/MainPage'
import * as UiActions from '../../actions/ui'
import style from './style.css'

class App extends React.Component {
  render() {
    const { ui, actions, children } = this.props
    return (
      <div className={style.normal}>
        <MainPage ui={ui} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UiActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
