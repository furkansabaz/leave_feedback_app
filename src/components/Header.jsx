import PropTypes from 'prop-types'; //impt
 function Header({text,message,bgColor,textColor}) {
   console.log();
   const headerStyle  = {backgroundColor:bgColor,color:textColor};
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
        Message : <span>{message}</span>
      </div>
    </header>
  )
}

Header.defaultProps = {
 text: 'Feedback UI',
 message: 'Default Message',
 bgColor: 'rgba(0,0,0,0.4)',
 textColor: '#ff6a95'
};
Header.propTypes= {
  text: PropTypes.string,
  message: PropTypes.string
}
export default Header;
