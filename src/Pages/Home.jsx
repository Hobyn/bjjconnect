import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TextSlider = styled(Slider)`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;

  .slick-slide {
    text-align: center;
  }
`;

const TextSlide = styled.div`
  padding: 20px;
`;

const Section = styled.section`
    display: flex;
    padding: 300px 20px 200px 20px;
    background-image: url('main-banner.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    text-align: center;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    color:#000;
`;

const EmptyContainer = styled.div`
    flex: 1;
`;

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Section>
                <Content>
                    <h2>COMEÇAR A TREINAR NA <br />
                        GRACIE BARRA É FÁCIL</h2>
                    <p>Conteúdo da seção...</p>
                </Content>
                <EmptyContainer />
            </Section>

            <TextSlider {...settings}>
                <TextSlide>
                    <h3>Slide 1</h3>
                    <p>Texto do slide 1</p>
                </TextSlide>
                <TextSlide>
                    <h3>Slide 2</h3>
                    <p>Texto do slide 2</p>
                </TextSlide>
                <TextSlide>
                    <h3>Slide 3</h3>
                    <p>Texto do slide 3</p>
                </TextSlide>
            </TextSlider>

        </div>
    );
};

export default Home;
