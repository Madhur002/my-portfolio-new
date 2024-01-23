import React from 'react'

const SkillSection = () => {
  return (
    <>
      <div
      id='skill-section'
        className={`flex h-screen justify-center gap-4 items-center flex-col bg-[#00c2a2] w-full`}
      >
        <div className='w-36 h-36 bg-slate-900'>div 1</div>
        <div className='w-36 h-36 bg-yellow-900'>div 2</div>
        <div className='w-36 h-36 bg-green-900'>div 3</div>
        <div className='w-36 h-36 bg-red-900'>div 4</div>
        <div className='w-36 h-36 bg-blue-900'>div 5</div>
    </div>
    </>
  )
}

export default SkillSection
