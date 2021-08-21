import React from 'react'
import facebook from './img/facebook.png'
import youtube from './img/youtube.png'
import insta from './img/ins.png'
import qb from './img/q.png'
import gmail from './img/gmail.png'

export default function Links(){
    return (
        <div className="container my-container">
            <div className="Links-div">
                <a className="mx-3 my-3 linkimages" href="https://www.facebook.com/saathiproduction" target="_blank"><img src={facebook} alt="Facebook link" width="145" height="145"/></a>
                <a className="mx-3 my-3 linkimages" href="mailto: risefornepalwork@gmail.com" target="_blank"><img src={gmail} alt = "messanger link" width="145" height="145"/></a>
                <a className="mx-3 my-3 linkimages" href="https://www.youtube.com/channel/UCmAo6JSi8CLuJ4DEeBXdetA" target="_blank"><img src={youtube} alt="Youtube channel" width="145" height="145"/></a>
                <a className="mx-3 my-3 linkimages" href="https://www.instagram.com/saathiproduction/?fbclid=IwAR0span0gzzbjUqqFGcn6spD1twW1x8_cwT4GqkaGmhMvLSwlywASQ4q4ck" target="_blank"><img alt="instagram link" src={insta} width="145" height="145"/></a>
                <a className="mx-3 my-3 linkimages" href="https://www.youtube.com/playlist?list=PL5Q4fSqgVM32YABomcB9jyQBUcsH7Uh1T" target="_blank"><img src={qb} width="145" alt="Learn qbasic with us | Youtube" height="145"/></a>
            </div>
        </div>
    )
}
