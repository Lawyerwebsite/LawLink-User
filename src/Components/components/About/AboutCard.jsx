import React from 'react';



const AboutCard = () => {
    const List = [
        {
            id:1,
            img:"https://mumbai.iociindia.com/uploads/images/dr_siddhrth.png",
            name:"Alex Darayov",
            education:"Lawyer",
        },
        {
            id:2,
            img:"https://kanoongurus.com/public/lawyers_avatar/1620498823_lawyer-profile.png",
            name:"Mark Brown",
            education:"Lawyer",
        },
        {
            id:3,
            img:"https://kanoongurus.com/public/lawyers_avatar/1621846201_lawyer-profile.png",
            name:"Jane Doe",
            education:"Lawyer Assistant",
        },

    ];

const CardStyle = ({name,education,img}) =>{
    return(
        <div className="relative border p-9 rounded-lg h-50 flex flex-col justify-evenly gap-4">
            <img src={img} alt={name}  className="my-4 w-full h-80 object-cover"/>
            <div className='font-bold text-xl text-blue-600 text-center'>{name}</div>
            <p className='font-bold text-lg text-center' >{education}</p>
            </div>
    );
};

return(
    <div className="text-2xl font-bold mb-4 text-center mt-5 " >
        <div  className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-10 m-8 justify-evenly">
            {List.map((value)=>(
                <CardStyle
                key={value.id}
                name={value.name}
                img={value.img}
                education={value.education}/>
            ))}

        </div>
    </div>
)

}

export default AboutCard;
