const ce = React.createElement;

const MyTitle = props => ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

const MyFirstComponent = () =>
  ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'peru' })
  );

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
