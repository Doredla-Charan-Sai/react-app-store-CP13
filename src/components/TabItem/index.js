// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onSelect} = props
  const {tabId, displayText} = tabDetails
  const activeTab = isActive ? 'active-tab' : 'btn'

  const onHlight = () => {
    onSelect(tabId)
  }
  return (
    <li>
      <button type="button" className={` ${activeTab}`} onClick={onHlight}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
