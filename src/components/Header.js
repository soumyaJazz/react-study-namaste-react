//header
const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        className="company-logo"
        src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        alt="logo"
      />
      <ul className="menu-list">
        <li className="menu-list-item">Home</li>
        <li className="menu-list-item">About us</li>
        <li className="menu-list-item">Contact Us</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
