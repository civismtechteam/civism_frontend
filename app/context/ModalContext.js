import React from "react";

export const ModalContext = React.createContext();

export const withModalAccess = Component => props => (
  <ModalContext.Consumer>
      {modalContext => <Component {...props} modal={modalContext} />}
  </ModalContext.Consumer>
);
