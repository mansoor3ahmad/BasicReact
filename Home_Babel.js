function Names() {
  const names = ['Mansoor', 'Ahmad', 'Tekke'];
  return names.map(name => {
    return /*#__PURE__*/React.createElement("p", {
      children: name
    });
  });
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, {
    children: [/*#__PURE__*/React.createElement("h1", {
      children: "Hello and Welcome!!"
    }), Names()]
  });
}