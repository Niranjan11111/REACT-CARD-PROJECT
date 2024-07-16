import Npfp from './assets/images/Gyomei.jpeg'
import './BusinessCard.css'
import mail from './assets/images/email-dark.png'
import lnkdIn from './assets/images/linkedin.png'
import git from './assets/images/github-dark.png'
import fb from './assets/images/facebook.png'
import insta from './assets/images/instagram.png'

function BusinessCardDark(){

    return(
        <div className=' w-[350px] border   border-gray-400 rounded-2xl  m-16 shadow-2xl bg-[#1A1B21] ' >
            <div className=' p-4 ' >
                    <div className=' flex justify-center'>
                       <img className=' w-[310px] h-[300px] object-cover flex justify-center rounded-lg mb-4' src={Npfp} alt="" />
                    </div>
                    <h1 className=' font-bold text-lg flex justify-center text-white' >Gyomei Himejima</h1>
                    <p className='flex justify-center text-[#F5F5F5]' >Stone Hashira</p>

                    <div className=' flex gap-5 justify-center mb-4 mt-4' >
                        <button className=' bg-white px-4 py-2 rounded-full flex gap-3 items-center justify-center text-black' ><img className='w-5 ' src={mail} alt="" />Mail</button>
                        <button className=' bg-indigo-600 px-4 py-2 rounded-full flex gap-3 items-center justify-center text-white ' ><img className='w-5' src={lnkdIn} alt="" />Linked In</button>
                    </div>

                    <div className=' '>
                        <h1 className='font-bold text-[#F5F5F5]'>About</h1>
                        <p className=' text-justify text-[#DCDCDC]'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h1 className='font-bold text-[#F5F5F5]'>Interests</h1>
                        <p className=' text-justify text-[#DCDCDC]' >Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
            </div>
            
            <div className=' flex items-center justify-center gap-16 p-5 min-w-max  border-t-[1px] border-slate-500 ' >
                <a href=""><img className=' h-7' src={git} alt="" /></a>
                <a href=""><img className=' h-7' src={fb} alt="" /></a>
                <a href=""><img className=' h-7' src={insta} alt="" /></a>
            </div>
        </div>
    )
}

export default BusinessCardDark