import React from 'react'

function Tags() {
    const tags = [
        "Fiction",
        "Mystery",
        "Romance",
        "Horror",
        "Nonification",
        "Childres's"
    ]
  return (
    <>
        <div className='mt-10 flex justify-center items-center gap-5 py-3 border-t-1 border-b-1'>
            {
                tags.map((tag, tagIdx) => {
                    return (
                        <span className='cursor-pointer font-semibold text-lg' key={tagIdx} onClick={() => console.log(`Clicked in ${tag}`)}>{tag}</span>
                    )
                })
            }
        </div>
    </>
  )
}

export default Tags