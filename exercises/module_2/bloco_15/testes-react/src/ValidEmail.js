import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const verified = <h3 style={{ color: 'green' }}>Email Válido</h3>;
  const notVerified = (
    <h3 data-testid="notVerified" style={{ color: 'red' }}>
      Email Inválido
    </h3>
  );

  if (email) {
    return (
      <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        {verifyEmail(email) ? verified : notVerified}
      </div>
    );
  }
  return <div data-testid="emptyInput">Type your email address above</div>;
};

export default ValidEmail;
