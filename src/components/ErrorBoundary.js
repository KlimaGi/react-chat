import React from "react";
import { NavLink } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="m-5 p-5">
          <h5 className="text-center mt-5">
            <strong>404</strong> - Woops! Something went wrong...
            <NavLink to="/" className="link-to btn btn-room-create m-5 col-2">
              Try again
            </NavLink>
          </h5>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
