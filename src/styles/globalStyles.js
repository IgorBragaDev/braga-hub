import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --Color-primary:#FF577F ;
    --Color-primary-focus: #FF427F;
    --Color-primary-negative: #59323F;
    
    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343B41;
    --Grey-1:#868E96;
    --Grey-0 :#F8F9FA;

    --negative-feedback: #E83F5B;
    --warning-feedback: #FFCD07;
    --sucess-feedback: #3FE864;
    --information-feedback: #155BCB;

    --base-font: 'Inter', sans-serif;


}

body{
    .ReactModal__Overlay{
        background-color: rgba(255, 255, 255, 0.15);
    }
}


`;
