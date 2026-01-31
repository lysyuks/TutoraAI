function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: '#0f0f1a',
      color: '#6b7280',
      padding: '24px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container-width" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '14px' }}>
          &copy; {currentYear} Serhii Lysiuk. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
