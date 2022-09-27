import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectTrending } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
const Trending = () => {
    const movies = useSelector(selectTrending);
    return (
        <Container>
            <h4>Trendings</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => {
                        return (
                            <Wrap key={key}>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                            </Wrap>
                        )
                    })
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;
        h4{
        margin-bottom:20px;
    }
`
const Content = styled.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        img{
            opacity: 0.3;
        }
    }
`


export default Trending