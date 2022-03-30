import React from 'react';
import { Container, Pagination, Button } from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json'
import placeholder from '../../assets/placeholder_image.svg';

const SponsorCard = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 1em;
    margin-top: 1em;
    padding: 1em;
    
    background: rgba(252, 252, 252, 0.3);
    border-radius: 20px;
    border: 1px solid #0FA3B1;

    @media (min-width: 1200px) {
        width: 58.33333%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 992px) {
        width: 66.666666%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 768px) {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        height: 500px;
    }

`;

const SponsorCardImage = Styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 1em;
`;

const SponsorCardPaging = Styled(Pagination)`
    margin-top: 1em;
    margin-bottom: 1em;    
    display: flex;
    justify-content: center;

    `;

const SponsorCardButton = Styled(Button)`
    margin-left: 0;
    margin-right: 0;
    align-self: flex-start;

    background-color: rgba(0, 0, 0, 0.0);
    border-color: rgba(0, 0, 0, 0.0);
    text-decoration: underline;
    color: #0FA3B1;

    :hover {
        background-color: rgba(0, 0, 0, 0.0);
        border-color: rgba(0, 0, 0, 0.0);
        text-decoration: underline;
        color: var(--color-dark);
    }
`;

const SponsorCardContent = Styled.p`
    margin-left: 2em;
    margin-right: 2em;
`;
function SponsorCarousel(){
    // TODO: Fix the logos to be found using the sponsorData.json file.

    const [activeCardIndex, setActiveCardIndex] = React.useState(0);

    function handleClick(event){
        event.preventDefault();

        if (event.currentTarget.id === 'prev'){
            setActiveCardIndex(activeCardIndex - 1 < 0 ? sponsorData.gold.length - 1 : activeCardIndex - 1);
        } else if (event.currentTarget.id === 'next'){
            setActiveCardIndex(activeCardIndex + 1 > sponsorData.gold.length - 1 ? 0 : activeCardIndex + 1);
        } else {
            setActiveCardIndex(event.currentTarget.id);            
        }

    }

    return (
        <Container>
            <SponsorCard>
                {sponsorData.gold[activeCardIndex].logo ?
                    <SponsorCardImage src={sponsorData.gold[activeCardIndex].logo} alt={sponsorData.gold[activeCardIndex].company} /> 
                    : <SponsorCardImage src={placeholder} />
                }
                {/* <h3>{sponsorData.gold[activeCardIndex].company}</h3> */}
                <SponsorCardContent>{sponsorData.gold[activeCardIndex].description}</SponsorCardContent>
                <SponsorCardButton>Learn more</SponsorCardButton>
            </SponsorCard>
            <SponsorCardPaging>
                <Pagination.Prev id={'prev'} onClick={handleClick}/>
                <Pagination.Item id={0} active={activeCardIndex === 0 ? true : false} onClick={handleClick}>1</Pagination.Item>
                <Pagination.Item id={1} active={activeCardIndex === 1 ? true : false} onClick={handleClick}>2</Pagination.Item>
                <Pagination.Next id={'next'} onClick={handleClick}/>
            </SponsorCardPaging>
        </Container>
    );

}

export default SponsorCarousel;