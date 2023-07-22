import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
        text-align: center;

    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        text-align: center;
        margin-bottom: 12px;
    }   

    a {
        display: flex;
        width: 15%
    }
    
    a.goTo {
        color: rgba(147, 196, 125, .8);
        text-decoration: none;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
        margin: auto;
    }
    
    a.goTo:hover {
        color: #93c47d;
    }

    a.remove {
        color: rgba(224,102,102,.8);
        text-decoration: none;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
        margin: auto;
    }
    
    a.remove:hover {
        color: #e06666;
    }

    hr {
        color: #FAFAFA60;
        margin: 24px 0;
    }


    @media only screen and (max-width: 400px) {
        a {
            display: flex;
            width: 50%
        }
    }


    @media only screen and (max-width: 960px) {
        a {
            display: flex;
            width: 50%
        }
    }

    @media only screen and (max-width: 1280px) {
        a {
            display: flex;
            width: 50%
        }
    }
`