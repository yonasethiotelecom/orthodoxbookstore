import React from 'react'
import Image from 'next/image'

function FolderList() {
    const List = [
        'General',
        'ገድላት እና ድርሳናት',
        'መጽሐፍ ቅድስ',
        'ሐይማኖት',
        'ጥናታዊ ጽሑፍ',
        'ስነ ምግባር',
        'ዓለማዊ መጽሐፍት',
        'ስርዓት',
        'ትርጓሜ',
        'የግዕዝ እና የዜማ ሞገስ',
        'ታሪክ',
        'ሚስጢራት'
      ];
  return (
    <div>
    <h2 className=' text-center font-extrabold  text-4xl mb-6'> Categories/ማውጫ:</h2>
    <ul className=' grid  grid-cols-2 gap-4 md:grid-cols-4 md:gap-12'>
      {List.map((item, index) => (
        <li key={index}>
            <Image
      src="/image/folder.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
          {item}</li>
      ))}
    </ul>
  </div>
  )
}

export default FolderList
