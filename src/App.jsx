import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='mt-32'>
        <div className='desktop:max-w-custom-4xl'>
          <h2 className='font-black text-custom-purple font-satoshi text-custom-2xl custom-tablet:text-custom-4xl'>
            Speakers
          </h2>
          <p className="mt-6 text-custom-xl text-custom-metal">
            We're inviting the top creatives in the tech industry from all over the world to
            come learn, grow, scrape their knees, try new things, to be vulnerable, and to have
            epic adventures together, this time both in-person and via livestream.
          </p>
        </div>
        <div className='mt-10 custom-tablet:mt-16 custom-desktop:grid custom-desktop:grid-cols-4 custom-desktop:gap-8 custom-desktop:items-start'>

        </div>
      </div>

      <div
        role='tablist'
        aria-label='Speakers lineup'
        className='grid gap-8 custom-tablet:grid-cols-3 custom-desktop:grid-cols-1'
      >
        <button
          role='tab'
          aria-selected='true'
          aria-controls='day-one'
          id='one'
          className='pb-5 flex flex-col border-b-2 border-custom-purple'
        >
          <span className='text-custom-xs text-custom-purple font-semibold'>Day 1 </span>
          <span className='mt-1 text-custom-xl text-custom-purple font-semibold'>September 5</span>
        </button>
        <button
          role='tab'
          aria-selected='false'
          aria-controls='day-two'
          id='two'
          className='pb-5 flex flex-col border-b-2 border-custom-metal/10'
        >
          <span className='font-semibold border-custom-metal'>Day 2 </span>
          <span className='mt-1 font-semibold border-custom-metal'>September 6</span>
        </button>
        <button
          role='tab'
          aria-selected='true'
          aria-controls='day-three'
          id='three'
          className='pb-5 flex flex-col border-b-2 border-custom-metal/10'
        >
          <span className='font-semibold border-custom-metal'>Day 3 </span>
          <span className='mt-1 font-semibold border-custom-metal'>September 7</span>
        </button>
      </div>

      <div
        role='tabpanel'
        id='day-one'
        aria-labelledby='one'
        tabIndex={0}
        className='custom-desktop:col-span-3'
      >
        <ul
          className='mt-10 grid gap-10 custom-tablet:gap-x-8 gap-y-16 custom-tablet:grid-cols-3 custom-desktop:mt-0'
        >
          <li>
            <div>
              <p>asd1</p>
              <h3 className='mt-6 text-custom-xs text-custom-tahiti-blue font-semibold'>Designer at Sketch</h3>
              <p className='mt-1 text-custom-lg text-custom-midnight'>David Brooks</p>
            </div>
          </li>
          <li>
            <div>
              <p>asd2</p>
              <h3 className='mt-6 text-custom-xs text-custom-tahiti-blue font-semibold'>Designer at Sketch</h3>
              <p className='mt-1 text-custom-lg text-custom-midnight'>David Brooks</p>
            </div>
          </li>
          <li>
            <div>
              <p>asd3</p>
              <h3 className='mt-6 text-custom-xs text-custom-tahiti-blue font-semibold'>Designer at Sketch</h3>
              <p className='mt-1 text-custom-lg text-custom-midnight'>David Brooks</p>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default App
