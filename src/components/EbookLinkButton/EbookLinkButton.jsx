import './EbookLinkButton.css'

function EbookLinkButton({ children = '전자책바로가기', type = 'button', ...buttonProps }) {
  return (
    <button type={type} className="ebook-link-button" {...buttonProps}>
      {children}
    </button>
  )
}

export default EbookLinkButton
