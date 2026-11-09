import { useState } from 'react'
import InfoTabButton from '../InfoTabButton/InfoTabButton'
import HoldingList from '../HoldingList/HoldingList'
import RelatedBooksPanel from '../RelatedBooksPanel/RelatedBooksPanel'
import BookStatsPanel from '../BookStatsPanel/BookStatsPanel'
import './BookInfoTabs.css'

const TABS = [
  { id: 'holdings', label: '소장정보' },
  { id: 'related', label: '연관도서정보' },
  { id: 'stats', label: '통계정보' },
]

function BookInfoTabs({ defaultTab = 'holdings', holdings = [], ...holdingHandlers }) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="book-info-tabs">
      <div className="book-info-tabs__list" role="tablist">
        {TABS.map((tab) => (
          <InfoTabButton
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </InfoTabButton>
        ))}
      </div>

      <div className="book-info-tabs__panel" role="tabpanel">
        {activeTab === 'holdings' && <HoldingList items={holdings} {...holdingHandlers} />}
        {activeTab === 'related' && <RelatedBooksPanel />}
        {activeTab === 'stats' && <BookStatsPanel />}
      </div>
    </div>
  )
}

export default BookInfoTabs
