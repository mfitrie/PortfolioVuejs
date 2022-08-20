<template>
    <i class="fa-solid fa-bars menu_icon"></i>
        <div class="background__loader">
            <div class="loader">
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <span>Loading...</span>
            </div>
        </div>
        

        <header class="header__one">
            <i class="fa-solid fa-angle-right back_icon"></i>
            <div>Developer</div>
            <ul>
                <li><a href="#firstPage" style="text-decoration: none;">Home</a></li>
                <li><a href="#sectionOne" style="text-decoration: none;">Skills</a></li>
                <li><a href="#sectionTwo" style="text-decoration: none;">Portfolio</a></li>
                <li>
                    <a href="https://github.com/mfitrie" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/_mfitrie_" target="_blank" title="Twitter">
                        <!-- <i class="gg-twitter"></i> -->
                        <i class="fa-brands fa-twitter-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100001675692452" target="_blank" title="Facebook">
                        <!-- <i class="gg-facebook"></i> -->
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/mfitrie20" target="_blank" title="Telegram">
                        <i class="fa-brands fa-telegram"></i>
                    </a>
                </li>
                <li class="header__one--ContactUs">
                    <a href="https://www.linkedin.com/in/muhammad-fitrie-a88472199/" target="_blank" style="text-decoration: none;" title="Linkedin">
                        <object type="image/svg+xml" data="image/Other_Icon/icons8-linkedin-circled.svg" style="margin-right: 0.5rem;">
                        </object>
                        <span>Contact me</span>
                    </a>
                </li>
            </ul>
        </header>

        <div class="first-page" id="firstPage">
            <main class="main__one">
                <div>
                    <p class="main__one--greeting main__one--animated">Hello! <br> I'm Fitrie. </p>
                    <p class="main__one--bio main__one--animated">Web and Native Android Enthusiast</p>

                        <div class="main__one--getStarted main__one--animated">
                            <a href="#sectionOne" style="text-decoration: none;">
                                <p>
                                        <!-- <i class="gg-coffee icon"></i>  -->
                                        <i class="fa-solid fa-mug-hot icon"></i>
                                        GET STARTED
                                </p> 
                            </a>

                        </div>

                </div>
                <div class="main__one--picture">
                    <img src="../assets/image/aku2.jpg" alt="developer pic">
                </div>
            </main>

            
        </div>

        <!-- skills -->
        <section class="section__one" id="sectionOne">
            <div class="section__one--canDo">
                <div class="canDo__title">What I Can Do</div>
                
                <div class="canDo__box">
                    <div class="canDo__box--one">
                        <object type="image/svg+xml" data="./image/IconCanDo/android.svg"></object>
                        <span>Android Development</span> 
                        <span>Developing Android Application using Kotlin, Kotlin Coroutine, MVVM Architecture, Retrofit, ROOM Database</span> 
                    </div>
                    <div class="canDo__box--two">
                        <object type="image/svg+xml" data="./image/IconCanDo/frontEnd.svg"></object>
                    <span>Website Front End</span> 
                    <span>Using HTML, CSS, JavaScript, Parcel.js, Anime.js</span> 


                    </div>
                    <div class="canDo__box--three">
                        <object type="image/svg+xml" data="./image/IconCanDo/backEnd.svg"></object>
                        <span>Website Back End</span> 
                        <span>Using Node.js, Express.js, Mapbox, Node Package Manager (NPM), Pug, Stripe for payment, MongoDB, MySQL</span> 


                    </div>
                    
                    <div class="canDo__box--four">
                        <object type="image/svg+xml" data="./image/IconCanDo/ux.svg"></object>
                        <span>UX Design</span> 
                        <span>Using AdobeXD, DrawIO</span> 


                    </div>
                    <div class="canDo__box--five">
                        <object type="image/svg+xml" data="./image/IconCanDo/webScrapping.svg"></object>
                        <span>Web Scrapping</span> 
                        <span>Using Node.js puppeteer</span> 
                    </div>
                    
                </div>
            </div>
            <div class="section__one--skills">
                <div class="skills__title">Skills</div>
                <div class="skills__listSkill">
                    <object type="image/svg+xml" data="./image/Logo/javascript-js-seeklogo.com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/node-node-js-seeklogo.com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/mongodb-logo-svgrepo-com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/kotlin-seeklogo.com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/mysql-logo-svgrepo-com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/firebase-1-logo-svgrepo-com.svg"></object>
                    <object type="image/svg+xml" data="./image/Logo/git-svgrepo-com.svg"></object>
                </div>
            </div>
        </section>



        <!-- portfolio -->
        <section class="section__two" id="sectionTwo">
            <div class="canDo__title">My Portfolio</div>

            <div class="section__two--portfolio">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
</template>

<script>
import index from '../assets/script/index'

export default {
    name: "PortFolio",
    mounted() {
        index();
    },

}
</script>