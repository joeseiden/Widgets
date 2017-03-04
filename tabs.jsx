import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentTab: 0, currentContent: "Some content"};
  }

  setContent(content, idx){
    this.setState({currentTab: idx});
    this.setState({currentContent: content});
  }


  render(){
    console.log('in render');
    let content = this.props.tabs.map((tab, idx) => (
      <li key={idx}>
        <header
          onClick = {this.setContent.bind(this, tab.content, idx)}>
          {tab.title}
        </header>
      </li>
    ));

    return (
    <div>

      <h1>I am tabs</h1>
      <tabwindow>
        <ul>
          {content}
        </ul>
        <article>{this.state.currentContent}</article>
      </tabwindow>
    </div>
    );
  }
}

export default Tabs;
