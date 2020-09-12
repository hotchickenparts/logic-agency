import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer";
import "../styles/layout.css";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const { children, siteTitle, navMenuItems } = this.props;
    const { scrolled } = this.state;
    return (
      <>
        <Navbar navMenuItems={navMenuItems} />

        <>{children}</>
        <Footer siteTitle={siteTitle} />
      </>
    );
  }
}

export default Layout;
