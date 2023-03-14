import React, {Component} from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import gitFon from '../Assets/git.jpg'
import jsFon from '../Assets/js.jpg'
import htmlFon from '../Assets/html.jpg'
import cssFon from '../Assets/css.jpg'
import reactFon from '../Assets/react.jpg'
import me1 from '../Assets/me1.jpg'
import me2 from '../Assets/me2.jpg'
import me3 from '../Assets/me3.jpg'

export default class About extends Component {
    render() {
        return(
            <Container>
                <Tab.Container id='left-tabs-examle' defaultActiveKey='first'>
                    <Row >
                        <Col sm={3}  className="text-center">
                            <Nav variant='pills' className='flex-column mt-2' >
                                <Nav.Item>
                                    <Nav.Link eventKey='first' class="p-3 mb-2 bg-info text-white">Git</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Hard skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Soft skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey='first' className="text-center">
                                    <h1>Мой github</h1>
                                    <img src={gitFon}  
                                    height={750}
                                    className='d-block w-100'/>
                                    <p>На моем github аккаунте вы сможете найти мои работы</p>
                                    <p><a href="https://github.com/iewher">Ссылка</a></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second' className="text-center">
                                    <h1>Я использую такие языки как:</h1>
                                    <h2 className="mt-3">1.JavaScript</h2>
                                    <img src={jsFon}
                                    height={750}
                                    className='d-block w-100 h-100'/>
                                    <h2 className="mt-3">2.HTML</h2>
                                    <img src={htmlFon} 
                                    height={750}
                                    className='d-block w-100 h-100'/>
                                    <h2 className="mt-3">3.CSS</h2>
                                    <img src={cssFon} 
                                    height={750}
                                    className='d-block w-100 h-100'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third' className="text-center">
                                    <h1>Обладаю качествами:</h1>
                                    <h2 className="mt-3">1.Обучаемый</h2>
                                    <img src={me1}
                                    height={750}
                                    className='d-block w-100'/>
                                    <h2 className="mt-3">2.Самостоятельный</h2>
                                    <img src={me2}
                                    height={750}
                                    className='d-block w-100'/>
                                    <h2 className="mt-3">3.Коммуникабельный</h2>
                                    <img src={me3}
                                    height={750}
                                    className='d-block w-100'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth' className="text-center">
                                    <h1>Я использую такие фреймворки как:</h1>
                                    <h1 className="mt-3">React</h1>
                                    <img src={reactFon}
                                    height={750}
                                    className='d-block w-100'/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
