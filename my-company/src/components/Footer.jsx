function Footer() {
  return (
    <footer style={{
      marginTop: '30px',
      padding: '16px',
      textAlign: 'center',
      backgroundColor: '#eee'
    }}>
      © {new Date().getFullYear()} My Company
    </footer>
  );
}
export default Footer;
