import * as React from "react"
import logoSrc from "../images/logo.png"

export default function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <a className="logo" href="/">
                    <img src={logoSrc} alt="Daniela Narvaez Marketing Digital" />
                </a>
                <div>
                    <a href="/blog">Blog</a>
                    <a className="primary-button" href="https://wa.me/message/EXDH535ELDS6B1" target="_blank" rel="noreferrer nofollow">Contacto</a>
                </div>
            </div>
        </div>
    )
}