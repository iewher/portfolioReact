import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import firstFon from '../Assets/firstFon.png'
import secondFon from '../Assets/secondFon.png'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className='d-block w-100'
                height='917'
                src={firstFon}
                alt='Fon'
            />
            <Carousel.Caption >
                <h2>Портфолио</h2>
                <p>Данный сайт выступает как мое портфолио</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                height='917'
                src={secondFon}
                alt='Fon'
            />
            <Carousel.Caption>
                <h2>Информация</h2>
                <p>Больше информации вы сможете найти во вкладке "Обо мне", а так же связаться со мной вы сможете во вкладке "Контакты"</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
