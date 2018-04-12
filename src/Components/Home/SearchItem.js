import React from 'react';
import styled from 'styled-components';

const SearchItem = (props) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 300px;
        width: 250px;
        max-height: 300px;
        max-width: 250px;
        cursor: pointer;
        margin: 20px 10px;
        background: white;
        border-radius: 3px;
    `
    const Title = styled.h2`
        font-size: 14px;
        margin: 5px 0px;
        color: grey;
    `
    const ItemName = styled.h1`
        font-size: 18px;
        font-weight: bolder;
        margin: 5px 0px;
    `
    const FoodImageContainer = styled.div`
        width: 100%;
        overflow: hidden;
        height: 150px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom: 1px lightgrey solid;
    `
    const FoodImage = styled.img`
        min-height: 100%;
        min-width: 100%;
        max-height: 150%;
        max-width: 150%;
    `
    const Price = styled.div`
        color: green;
        font-size: 20px;
    `
    const FlexRow = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 5px;
    `

    const Content = styled.div`
        padding: 10px;
    `

    const descriptionCutoff = props.info.description.length > 80 ? `${props.info.description.substring(0, 80)}...` : props.info.description
    return (
        <Wrapper>
            <FoodImageContainer>
                <FoodImage src={props.info.image_url}/>
            </FoodImageContainer>
            <Content>
                <ItemName>{props.info.name}</ItemName>
                <Title>{props.info.restaurant_name}</Title>
                <Price>$ {props.info.price}</Price>
                <FlexRow>{descriptionCutoff}</FlexRow>
            </Content>
        </Wrapper>
    );
};

export default SearchItem;