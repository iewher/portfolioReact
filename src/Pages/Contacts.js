import React, {Component} from "react";
import { Container, Form, Button } from "react-bootstrap";
import telegramIcon from '../Assets/telegram.png'
import emailIcon from '../Assets/email.png'

export default class Contacts extends Component {
    render() {
        return(
            <Container className="text-center">
                <h1 className="mt-3">Свяжитесь со мной</h1>
                <h2 className="mt-3">Telegram</h2>
                <img  src={telegramIcon} className="mt-3"
                width={300}
                height={300}
                />
                <p className="mt-3"><a href="https://t.me/iewher">Ссылка</a></p>
                <h2 className="mt-3">Email</h2>
                <img  src={emailIcon} className="mt-3" 
                width={300}
                height={300}
                />
                <p className="mt-3">goshagang@mail.ru</p>
                
            </Container>
        )
    }
}