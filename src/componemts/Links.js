import React from 'react'
import facebook from './img/facebook.png'
import youtube from './img/youtube.png'
import insta from './img/ins.png'
import qb from './img/q.png'
import messanger from './img/messanger.png'

export default function Links(){
    return (
        <div className="container">
            <div className="Links-div">
                <a className="mx-3 my-3" href="https://www.facebook.com/saathiproduction" target="_blank"><img src={facebook} width="145" height="145"/></a>
                <a className="mx-3 my-3" href="https://www.facebook.com/messages/t/103931878621652" target="_blank"><img src={messanger} width="145" height="145"/></a>
                <a className="mx-3 my-3" href="https://www.youtube.com/channel/UCmAo6JSi8CLuJ4DEeBXdetA" target="_blank"><img src={youtube} width="145" height="145"/></a>
                <a className="mx-3 my-3" href="https://www.instagram.com/saathiproduction/?fbclid=IwAR0span0gzzbjUqqFGcn6spD1twW1x8_cwT4GqkaGmhMvLSwlywASQ4q4ck" target="_blank"><img src={insta} width="145" height="145"/></a>
                <a className="mx-3 my-3" href="https://www.youtube.com/playlist?list=PL5Q4fSqgVM32YABomcB9jyQBUcsH7Uh1T" target="_blank"><img src={qb} width="145" height="145"/></a>
            </div>
        </div>
    )
}
