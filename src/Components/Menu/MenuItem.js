import styled from "styled-components";
import currency from "currency.js";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #5EBCD1;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #5EBCD1;
  height: 100%;
  justify-content: space-between;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export function MenuItem(name, price, description, image_url){
  
  return (
    <Wrapper className='menu-item-container'>
      <InnerBox>
        <FlexRow>
          <h3>{name}</h3><span>{currency(price).format(true)}</span>
          <div>{description}</div>
        </FlexRow>
        <FlexRow>
          <img src={imageUrl} alt='scrumptious food' />
        </FlexRow>
      </InnerBox>
    </Wrapper>
  );
}