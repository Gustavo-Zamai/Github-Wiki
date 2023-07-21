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
        margin: 8px 0;
    }

    a.goTo {
        color: rgba(147, 196, 125, .6);
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }
    
    a.goTo:hover {
        color: #93c47d;
    }

    a.remove {
        color: rgba(224,102,102,.6);
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }
    
    a.remove:hover {
        color: #e06666;
    }

    hr {
        color: #FAFAFA60;
        margin: 24px 0;
    }

`