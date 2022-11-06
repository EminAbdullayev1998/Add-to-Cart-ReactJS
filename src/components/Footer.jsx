import React from 'react'
import appstore from '../data/img/appstore.png'
import googleplay from '../data/img/googleplay.png'
import logo from '../data/img/logo.png'

const Footer = () => {
  return (
    <>
       <div className='footer'>

            <div className='main-box'>
                  <div className='options'>
                        <div className='aboutUs'>
                              <ul>
                                 <li><a target="_blank" href='https://mcdonalds.az/about-us'>Haqqimizda</a></li> 
                                 <li className='navLi'><a target="_blank" href='https://mcdonalds.az/our-history'>Tariximiz</a></li> 
                                 <li className='navLi'><a target="_blank" href='https://mcdonalds.az/news-notifications'>Xəbərlər və bildirişlər</a></li> 
                                 <li className='navLi'><a target="_blank" href='https://mcdonalds.az/questions'>Siz soruşursunuz. Biz cavablandırırıq</a></li> 
                                 <li className='navLi'><a target="_blank" href='https://mcdonalds.az/values-in-action'>Dəyərlərimiz</a></li> 
                              </ul>
                        </div>

                        <div className='career'>
                              <ul>
                                  <li><a target="_blank" href='https://mcdonalds.az/careers'>Karyera</a></li> 
                                  <li className='navLi'><a target="_blank" href='https://mcdonalds.az/staff-management'>İnsanlarımızla tanış olun: Heyət və idarəetmə</a></li>
                                  <li className='navLi'><a target="_blank" href='https://mcdonalds.az/apply-now'>İndi müraciət edin</a></li> 
                              </ul>
                        </div>

                        <div className='services'>
                               <ul>
                                   <li><a target="_blank" href='https://mcdonalds.az/services'>Xidmətlər</a></li> 
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/wifi'>Wi-Fi</a></li>
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/mcdelivery'>McDelivery<sup>®</sup></a></li> 
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/mcdrive'>MakAvto<sup>®</sup></a></li> 
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/download-app'>Mobil tətbiqi yükləyin</a></li> 
                               </ul>
                        </div>

                        <div className='contactUs'>
                               <ul>
                                   <li><a target="_blank" href='https://mcdonalds.az/contact-us'>Bizimlə Əlaqə</a></li> 
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/mobile-app-feedback'>Mobil tətbiq haqqında fikirləriniz</a></li>
                                   <li className='navLi'><a target="_blank" href='https://mcdonalds.az/restaurant-feedback'>Restoran haqqında fikirləriniz</a></li>
                               </ul>
                        </div>
                  </div>


                  <div className='links'>
                        <div className='social'>
                               <ul>
                                   <li className='fb'><a href='https://www.facebook.com/McDonalds.az/' target='_blank'><i className="fa-brands fa-facebook-f" /></a></li>
                                   <li className='yt'><a href='https://www.youtube.com/channel/UCVpFg6KGunp_I7TNUNIdJYw' target='_blank'><i className="fa-brands fa-youtube" /></a></li>
                                   <li className='insta'><a href='https://www.instagram.com/mcdonalds.az/' target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                                   <li className='in'><a href="https://www.linkedin.com/showcase/mcdonald's-azerbaijan" target='_blank'><i className="fa-brands fa-linkedin-in" /></a></li>
                               </ul>
                        </div>

                        <div className='apps'>  
                               <a href='https://apps.apple.com/az/app/mcdonalds/id1217507712' target="_blank"><img src={appstore} alt="error"/></a>
                               <a href='https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=az' target="_blank"><img src={googleplay} alt="error"/></a>
                        </div>
                  </div>

                  <div className='line'></div>

                  <div className='since'>
                         <p><img src={logo} alt="error" width="9%" height="20px"/> © 2022 McDonald's Bütün hüquqlar qorunur</p>
                  </div>
            </div>

       </div>
    </>
  )
}

export default Footer