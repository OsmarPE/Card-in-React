import { useState } from 'react'
import './App.scss'
import Content from './components/Content'
import ItemCard from './components/ItemCard'

function App() {

  const [indexItem, setindexItem] = useState(0)

  const iconsName = ['home', 'settings', 'lock']
  const informations = [
    {
      title: 'Home',
      description: 'This in the cab content, you can put anything you like in here'
    },
    {
      title: 'Account',
      description: 'This in the cab content, you can put anything you like in here'
    },
    {
      title: 'Settings',
      description: 'This in the cab content, you can put anything you like in here'
    }
  ]



  return (
    <>
      <main className='card'>
        <header className="card__heading">
          {
            iconsName.map( (icon,index) => <ItemCard  key={index} index={index} setindexItem={setindexItem} indexItem={indexItem} icon={icon} /> )
          }
          <div className="card__bar" style={{transform:`translateX(${4 * indexItem}rem)`}}></div>
        </header>
        <section className="card__body">
          <div className="slider">
            <div className="slider__content" style={{transform:`translateX(-${33.3 * indexItem }%)`}} >
              {
                informations.map( (info,index) => <Content key={index} info={info} />)
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
