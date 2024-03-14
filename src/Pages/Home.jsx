import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importe o CSS principal do Swiper

// Certifique-se de remover qualquer referência ao SwiperCore

const TextSlider = styled(Swiper)`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;

  .swiper-slide {
    text-align: center;
  }
`;

const TextSlide = styled(SwiperSlide)`
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


const Image = styled.img`
    width: 100%;
    height: auto;
`;

const NewSection = styled(Section)`
    background-image: url('banner-2.jpg');
    background-size: cover;
    background-position: center;
    color: white;
`;


const Home = () => {
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

            <TextSlider
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                loop={true}
            >
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

            
            <div>
            <NewSection>
                <Content>
                    <Image src="url_da_imagem_1.jpg" alt="Imagem 1" />
                </Content>
                <Content>
                    <Image src="url_da_imagem_2.jpg" alt="Imagem 2" />
                </Content>
            </NewSection>
        </div>
        </div>
    );
};

export default Home;