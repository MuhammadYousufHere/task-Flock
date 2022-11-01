import React, { Component } from "react";

const styles = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: "",
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles}>
          <h3>Something went wrong!</h3>
        </div>
      );
    }
    return this.props.children;
  }
}
