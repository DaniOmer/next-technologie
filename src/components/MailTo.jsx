function MailTo({ mail, children }) {
  return <a href={`mailto:${mail}`}>{children}</a>;
}

export default MailTo;
