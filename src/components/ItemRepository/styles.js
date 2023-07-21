import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;

    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 12px;
    }

    a.goTo {
        color: rgba(147, 196, 125, .6);
        text-decoration: none;
        margin: 0 24px 0 0 ;
    }
    
    a.goTo:hover {
        color: #93c47d;
    }

    a.remove {
        color: rgba(224,102,102,.6);
        text-decoration: none;
    }
    
    a.remove:hover {
        color: #e06666;
    }

    hr {
        color: #FAFAFA60;
        margin: 24px 0;
    }

`