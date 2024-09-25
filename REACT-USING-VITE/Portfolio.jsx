import React from "react";
// import '';
import dp from './dp.png';
function Portfolio(){
    // const dp = dp
    return(
        <>
            <div>
                <span style={{padding: '20px'}}>
                    <img src={dp}   height={40} style={{marginTop:'10px'}}/>
                    <button>HOME</button>
                    <button>ABOUT</button>
                    <button>SERVICES</button>
                    <button>BLOG</button>
                    <button>MORE</button>
                    <button id="contact" style={{marginLeft:'600px' }} >CONTACT</button>
                </span>
            </div>

            {/* <center> */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span >
                    <img src={dp} height={250} style={{marginRight: '200px'}}/>
                    </span>
                    <div>
                    <p>Akshat Sharma</p>
                    <h2>I'm a web <br/> developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ut, aliquid architecto voluptas nisi voluptatum eligendi, inventore maiores nesciunt nostrum. Magni accusamus sequi dolore eaque! Corrupti, nisi consequuntur.</p>

                    <button>Download CV</button>
                    </div>
            </div>
                {/* </div> */}
            {/* </center> */}
        </>
    )
}

export default Portfolio;